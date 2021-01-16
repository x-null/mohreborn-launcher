import {ChannelName, IpcChannel} from "@/shared/ipc/IpcChannel";
import {app, BrowserWindow, IpcMainEvent} from "electron";
import {ApplicationCommand} from "@/shared/ApplicationCommand";

export class ApplicationListener implements IpcChannel<ApplicationCommand> {
    name: ChannelName = ChannelName.APPLICATION;

    private window: BrowserWindow;

    constructor(window: BrowserWindow) {
        this.window = window;
    }

    handle(event: IpcMainEvent, request: ApplicationCommand): void {
        switch (request) {
            case ApplicationCommand.MINIMIZE: {
                this.window.minimize();
                break;
            }
            case ApplicationCommand.MAXIMIZE: {
                this.window.maximize();
                break;
            }
            case ApplicationCommand.CLOSE: {
                app.quit();
                break;
            }
        }
    }
}