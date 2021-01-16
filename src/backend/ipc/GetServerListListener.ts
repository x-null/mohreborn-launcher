import {ChannelName, IpcChannel} from "@/shared/ipc/IpcChannel";
import {IpcMainEvent} from "electron";
import {MasterServer, ServerOverview} from "@/backend/MasterServer";
import {Game} from "@/shared/Game";

export class GetServerListListener implements IpcChannel<Game[]> {
    name: ChannelName = ChannelName.GET_SERVER_LIST;
    private masterServer: MasterServer = new MasterServer();

    handle(event: IpcMainEvent, request: Game[]): void {
        this.masterServer.queryServers(...request).then(servers => {
            event.reply(ChannelName.GET_SERVER_LIST, servers);
        }).catch(error => {
            console.log(error);
            event.reply(ChannelName.GET_SERVER_LIST, new Map<Game, ServerOverview[]>());
        });
    }
}