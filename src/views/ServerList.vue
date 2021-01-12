<template>
  <div class="serverlist has-text-white">
        <h1 class="title is-1 has-text-white">Server List</h1>
    <!-- <p>{{servers}}</p> -->
    <p><bold>AA servers: </bold>{{ servers[0].length }} / SH servers: {{ servers[1].length }} / BT servers: {{ servers[2].length }}</p>
            <div v-if="loading">
          Loading..... (spinner)
        </div>
    <div v-else class="table-container">
      <table class="table is-striped is-hoverable is-narrow">
        <thead>
          <tr>
            <th>Game</th>
            <th>Server Name</th>
            <th>Map</th>
            <th>Players</th>
            <th>Gametype</th>
            <th>Ping</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody v-for="gamearray in servers" :key="gamearray.index" >
          <tr
            v-for="server in gamearray"
            :key="server.gameid"
            v-show="
              server.status.split('\\')[
                server.status.split('\\').indexOf('hostname') + 1
              ] != ''
            "
          >
            <th>{{ server.gameid }}</th>
            <th>
              {{
                server.status.split("\\")[
                  server.status.split("\\").indexOf("hostname") + 1
                ]
              }}
            </th>
            <th>
              {{
                server.status.split("\\")[
                  server.status.split("\\").indexOf("mapname") + 1
                ]
              }}
            </th>
            <th>
              {{
                server.status.split("\\")[
                  server.status.split("\\").indexOf("clients") + 1
                ] +
                "/" +
                server.status.split("\\")[
                  server.status.split("\\").indexOf("sv_maxclients") + 1
                ]
              }}
            </th>
            <th>
              {{
                server.status.split("\\")[
                  server.status.split("\\").indexOf("gametypestring") + 1
                ]
              }}
            </th>
            <th>1</th>
            <th>{{ server.ip + ":" + server.port }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServerList",
  data: function () {
    return {
      loading: true,
      games: [
        "mohaa",
        // "mohaamac",
        // "mohaad",
        "mohaas",
        // "mohaasd",
        // "mohaasmac",
        "mohaab",
        // "mohaabdm",
        // "mohaabd",
        // "mohaabmac",
      ],
      servers: [],
    };
  },
  mounted() {
      this.queryservers(this.games);
      this.loading = false;
  },
  methods: {
    queryservers(game) {
      var vm = this;
      var socket = new WebSocket("ws://master.x-null.net:8080/");

      // Connection opened
      socket.addEventListener("open", function () {
        for (let i = 0; i < vm.games.length; i++)
          socket.send("getservers " + game[i]);
      });

      // Listen for messages
      socket.addEventListener("message", function (event) {
        var data = JSON.parse(event.data)
        // Temp fix to clean all "dead" servers in the array
        for (let i = 0; i < data.length; i++) {
          if (data[i].status.split("\\")[data[i].status.split("\\").indexOf("hostname") + 1] == "") {
            data.splice(i, 1);
          }
        }
        vm.servers.push(data);
      });
    },
  },
};
</script>

<style scoped>
v-cloak { display: none }
table {
  width: 100vw;
}
</style>
