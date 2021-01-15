const { app, BrowserWindow } = require("electron");
const { ipcMain } = require("electron");

const url = require("url");
const path = require("path");
const { getAllServersFor } = require("./src/utils/MasterServer");
const { pingpong } = require("./src/utils/MOHpackets");

let mainWindow;
var servers = [];

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 550,
    minWidth: 800,
    minHeight: 550,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `./dist/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", async () => {
  await createWindow();
  servers = await getAllServersFor(["mohaa", "mohaas", "mohaab"]);
  for (let i = 0; i < servers.length; i++) {
    await pingpong(servers[i].ip, servers[i].port, "getstatus", (result) => {
       servers[i].ping = result; 
      console.log(result);
    });
  }
});

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function() {
  if (mainWindow === null) createWindow();
});

ipcMain.on("minimize-me", (evt, arg) => {
  mainWindow.minimize();
});

ipcMain.on("maximize-me", (evt, arg) => {
  mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize();
});

ipcMain.on("close-me", (evt, arg) => {
  app.quit();
});

ipcMain.on("close-me", (evt, arg) => {
  app.quit();
});


 ipcMain.on("ask-serverlist", async (evt, args) => {
    evt.sender.send("get-serverlist", servers);

});