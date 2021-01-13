<template>
  <div class="serverlist">
    <h1>Server List</h1>
    <p>
      <bold>AA servers: </bold>{{ servers[0].length }} / SH servers:
      {{ servers[1].length }} / BT servers: {{ servers[2].length }}
    </p>
    <div v-if="loading">Loading..... (spinner)</div>
    <div v-else>
      <table>
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
        <tbody v-for="gamearray in servers" :key="gamearray.index">
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
const { ipcRenderer } = window.require
  ? window.require("electron")
  : { send: function () {} };

export default {
  name: "ServerList",
  data: function () {
    return {
      loading: true,
      servers: [],
    };
  },
  mounted() {
    ipcRenderer.send("ask-serverlist");
    ipcRenderer.on("get-serverlist", (event, args) => {
      this.servers = args;
    });

    console.log(this.servers);
    this.loading = false;
  },
};
</script>

<style scoped>
v-cloak {
  display: none;
}
table {
  width: 100%;
}
</style>
