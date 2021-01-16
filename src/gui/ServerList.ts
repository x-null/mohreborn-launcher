import {IpcRenderer} from "electron";
import {Game} from "@/shared/Game";
import {Servers} from "@/backend/MasterServer";
import {ChannelName} from "@/shared/ipc/IpcChannel";

export class ServerList {
    constructor(private ipc: IpcRenderer) {}

    query(...games: Game[]): Promise<Servers> {
        return new Promise<Servers>((resolve => {
            this.ipc.once(ChannelName.GET_SERVER_LIST, (event, servers: Servers) => {
               resolve(servers);
            });
            this.ipc.send(ChannelName.GET_SERVER_LIST, games);
        }));
    }
}