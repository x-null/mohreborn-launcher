<template>
  <div class="serverlist">
    <!-- <p>{{servers}}</p> -->
    <p>AA servers: {{servers[0].length}}</p>
    <div class="table-container">
      <table class="table is-striped is-hoverable">
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
        <tbody>
          <tr v-for="server in servers[0]" :key="server.gameid">
            <th>{{server.gameid}}</th>
            <th>{{server.status.split("\\")[server.status.split("\\").indexOf("hostname") + 1]}}</th>
            <th>{{server.status.split("\\")[server.status.split("\\").indexOf("mapname") + 1]}}</th>
            <th>{{server.status.split("\\")[server.status.split("\\").indexOf("clients") + 1] + "/" + server.status.split("\\")[server.status.split("\\").indexOf("sv_maxclients") + 1]}}</th>
            <th>{{server.status.split("\\")[server.status.split("\\").indexOf("gametypestring") + 1]}}</th>
            <th>1</th>
            <th>{{server.ip + ":" + server.port}}</th>
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
      games: [
        "mohaa",
        // "mohaamac",
        // "mohaad",
        // "mohaas",
        // "mohaasd",
        // "mohaasmac",
        // "mohaab",
        // "mohaabdm",
        // "mohaabd",
        // "mohaabmac",
      ],
      servers: [],
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.queryservers(this.games);

      console.log(this.servers);
    });
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
        vm.servers.push(JSON.parse(event.data));
      });
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
</style>
