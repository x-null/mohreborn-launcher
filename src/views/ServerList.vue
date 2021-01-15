<template>
  <div class="serverlist">
    <h1>Server List</h1>
    <p>
      <bold>AA servers: </bold>{{ servers[0].length }} / SH servers:
      {{ servers[1].length }} / BT servers: {{ servers[2].length }}
    </p>
    <div>
      <el-table
        v-loading="loading"
        :data="servers"
        :default-sort="{ prop: 'players', order: 'descending' }"
        style="width: 100%"
      >
        <el-table-column prop="game" label="Game" sortable> </el-table-column>
        <el-table-column prop="hostname" label="Server Name" sortable>
        </el-table-column>
        <el-table-column prop="map" label="Map" sortable> </el-table-column>
        <el-table-column prop="players" label="Players" sortable>
        </el-table-column>
        <el-table-column prop="gametype" label="Gametype" sortable>
        </el-table-column>
        <el-table-column prop="ping" label="Ping" sortable> </el-table-column>
        <el-table-column prop="ip" label="IP" sortable> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServerList",
  data: function () {
    return {
      loading: true,
      servers: [[],[],[]],
    };
  },
  mounted() {
    const ipcRenderer = window.ipcRenderer
        ? window.ipcRenderer
        : { send: function () {} };
    ipcRenderer.send("ask-serverlist");
    ipcRenderer.on("get-serverlist", (event, args) => {
      if (args != null || args != "") {
        this.servers = args;
        this.loading = false;
      }
    });
  },
};
</script>

<style scoped></style>
