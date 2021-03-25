import {IpcRenderer} from "electron";
import {FakeIpcRenderer} from "@/gui/ipc/FakeIpcRenderer";

export function ipc(): IpcRenderer {
    return window.ipcRenderer ? window.ipcRenderer : new FakeIpcRenderer();
}