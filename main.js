const { app, BrowserWindow } = require("electron");
const { ipcMain } = require("electron");

const url = require("url");
const path = require("path");
const WebSocket = require("ws");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    minWidth: 800,
    minHeight: 500,
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
console.log(app);
app.on("ready", async () => {
  await createWindow();
  await queryservers();
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



//Serverlist utils

var servers = [];

function queryservers() {
  return new Promise((resolve, reject) => {
    var games = ["mohaa", "mohaas", "mohaab"];

    var socket = new WebSocket("ws://master.x-null.net:8080/");

    // Connection opened
    socket.addEventListener("open", function() {
      for (let i = 0; i < games.length; i++)
        socket.send("getservers " + games[i]);
    });

    // Listen for messages
    socket.addEventListener("message", function(event) {
      var data = JSON.parse(event.data);
      // Temp fix to clean all "dead" servers in the array
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].status.split("\\")[
            data[i].status.split("\\").indexOf("hostname") + 1
          ] == ""
        ) {
          data.splice(i, 1);
        }
      }

      servers.push(data);
      resolve(servers);
    });
  });
}

ipcMain.on("ask-serverlist", (evt, arg) => {
  evt.sender.send("get-serverlist", servers);
});



// Ping each server
