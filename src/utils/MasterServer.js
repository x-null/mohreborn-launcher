const { Server } = require("./Server.js") ;
const WebSocket = require("ws");

function getAllServersFor(games) {
  return new Promise((resolve) => {
    var servers = [];
    var socket = new WebSocket("ws://master.x-null.net:8080/");

    socket.addEventListener("open", function() {
      for (let i = 0; i < games.length; i++)
        socket.send("getservers " + games[i]);
    });

    socket.addEventListener("message", function(event) {
      var data = JSON.parse(event.data);

      for (let i = 0; i < data.length; i++) {
        // Temp fix to clean all "dead" servers in the array untill the masterserver is fixed
        if (
          data[i].status.split("\\")[
            data[i].status.split("\\").indexOf("hostname") + 1
          ] == ""
        ) {
          data.splice(i, 1);
        } else {
          //Create server objects
          let game = data[i].gameid;
          let hostname = data[i].status.split("\\")[
            data[i].status.split("\\").indexOf("hostname") + 1
          ];
          let map = data[i].status.split("\\")[
            data[i].status.split("\\").indexOf("mapname") + 1
          ];
          let players = data[i].status.split("\\")[
            data[i].status.split("\\").indexOf("clients") + 1
          ];
          let maxplayers = data[i].status.split("\\")[
            data[i].status.split("\\").indexOf("sv_maxclients") + 1
          ];
          let gametype = data[i].status.split("\\")[
            data[i].status.split("\\").indexOf("gametypestring") + 1
          ];
          let ip = data[i].ip + ":" + data[i].port;

          var server = new Server(game, hostname, map, players, maxplayers, gametype, ip);
          servers.push(server);
        }
      }
      resolve(servers);
      return servers;
    });
  });
}

module.exports = { getAllServersFor }