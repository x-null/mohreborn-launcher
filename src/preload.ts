import {IpcRenderer, ipcRenderer} from 'electron'

declare global {
    interface Window {
        ipcRenderer:IpcRenderer;
    }
}

window.ipcRenderer = ipcRenderer;