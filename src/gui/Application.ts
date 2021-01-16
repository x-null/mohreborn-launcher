import {IpcRenderer} from "electron";
import {ApplicationCommand} from "@/shared/ApplicationCommand";
import {ChannelName} from "@/shared/ipc/IpcChannel";

export class Application {
    constructor(private ipc: IpcRenderer) {}

    maximize() {
        this.ipc.send(ChannelName.APPLICATION, ApplicationCommand.MAXIMIZE);
    }

    minimize() {
        this.ipc.send(ChannelName.APPLICATION, ApplicationCommand.MINIMIZE);
    }

    close() {
        this.ipc.send(ChannelName.APPLICATION, ApplicationCommand.CLOSE);
    }
}