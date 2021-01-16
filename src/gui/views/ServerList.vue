<template>
  <div class="serverlist">
    <el-row>
      <el-col>
        <h1>Server List</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <p class="summary">
          <span><strong>MoH:AA</strong> - {{ serverCount('MOHAA') }}</span>
          <span><strong>MoH:SH</strong> - {{ serverCount('MOHAAS') }}</span>
          <span><strong>MoH:BT</strong> - {{ serverCount('MOHAAB') }}</span>
        </p>
      </el-col>
      <el-col class="server-list-controls" :span="6">
        <el-button icon="el-icon-search" circle @click="refreshServerList()"></el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table
            v-loading="loading"
            :data="allServers"
            :default-sort="{ prop: 'players', order: 'descending' }"
            style="width: 100%"
        >
          <el-table-column
              prop="game"
              label="Game"
              sortable
          />
          <el-table-column
              prop="status.hostname"
              label="Server Name"
              sortable
          />
          <el-table-column
              prop="status.mapname"
              label="Map"
              sortable
          />
          <el-table-column
              label="Players"
              sortable
          >
            <template #default="scope">
              {{ scope.row.gsStatus.numplayers }}/{{ scope.row.gsStatus.maxplayers }}
            </template>
          </el-table-column>
          <el-table-column
              prop="status.gametypestring"
              label="Gametype"
              sortable
          />
          <el-table-column
              prop="ping"
              label="Ping"
              sortable
          />
          <el-table-column
              prop="ip"
              label="IP"
              sortable
          />
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {ServerOverview, Servers} from "@/backend/MasterServer";
import {ServerList} from "@/gui/ServerList";
import {ipc} from "@/gui/ipc/IpcProvider";
import {Game} from "@/shared/Game";

export default class ServerListVue extends Vue {
  loading: boolean = true;
  servers: Servers = new Map<Game, ServerOverview[]>()
  private serverList: ServerList = new ServerList(ipc())

  get allServers(): ServerOverview[] {
    return Array.from(this.servers.values()).flat();
  }

  mounted() {
    this.refreshServerList();
  }

  refreshServerList() {
    this.loading = true;
    this.serverList.query(Game.MOHAA, Game.MOHAAS, Game.MOHAAB).then(servers => {
      this.servers = new Map<Game, ServerOverview[]>(servers);
      console.log(this.servers);
      this.loading = false;
    });
  }

  serverCount(gameStr: string): string {
    //@ts-ignore
    let game: Game = Game[gameStr];
    if (this.servers.has(game)) {
      let count: number = this.servers.get(game)!.length!;
      count = count != undefined ? count : 0;
      return count + ' server' + (count > 1 ? 's' : '');
    } else {
      return '0 servers';
    }
  }
}
</script>

<style lang="scss" scoped>
.summary {
  span:not(:last-child) {
    margin-right: 1rem;
  }
}
.server-list-controls {
  text-align: right;
}
</style>
