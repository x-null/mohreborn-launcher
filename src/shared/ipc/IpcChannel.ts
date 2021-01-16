import {IpcMainEvent} from "electron";

export enum ChannelName {
    APPLICATION = 'application',
    GET_SERVER_LIST = 'get-server-list'
}

export interface IpcChannel<T> {
    name: ChannelName;
    handle(event: IpcMainEvent, request: T): void;
}