import {IpcRenderer} from "electron";

export class FakeIpcRenderer implements IpcRenderer {
    addListener(event: string | symbol, listener: (...args: any[]) => void): this {
        return this;
    }

    emit(event: string | symbol, ...args: any[]): boolean {
        return false;
    }

    eventNames(): Array<string | symbol> {
        return [];
    }

    getMaxListeners(): number {
        return 0;
    }

    invoke(channel: string, ...args: any[]): Promise<any> {
        return Promise.resolve(undefined);
    }

    listenerCount(event: string | symbol): number {
        return 0;
    }

    listeners(event: string | symbol): Function[] {
        return [];
    }

    off(event: string | symbol, listener: (...args: any[]) => void): this {
        return this;
    }

    on(channel: string, listener: (event: Electron.IpcRendererEvent, ...args: any[]) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    on(channel: string | symbol, listener: ((event: Electron.IpcRendererEvent, ...args: any[]) => void) | ((...args: any[]) => void)): this {
        return this;
    }

    once(channel: string, listener: (event: Electron.IpcRendererEvent, ...args: any[]) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    once(channel: string | symbol, listener: ((event: Electron.IpcRendererEvent, ...args: any[]) => void) | ((...args: any[]) => void)): this {
        return this;
    }

    postMessage(channel: string, message: any, transfer?: MessagePort[]): void {
    }

    prependListener(event: string | symbol, listener: (...args: any[]) => void): this {
        return this;
    }

    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this {
        return this;
    }

    rawListeners(event: string | symbol): Function[] {
        return [];
    }

    removeAllListeners(channel: string): this;
    removeAllListeners(event?: string | symbol): this;
    removeAllListeners(channel?: string | symbol): this {
        return this;
    }

    removeListener(channel: string, listener: (...args: any[]) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(channel: string | symbol, listener: (...args: any[]) => void): this {
        return this;
    }

    send(channel: string, ...args: any[]): void {
    }

    sendSync(channel: string, ...args: any[]): any {
    }

    sendTo(webContentsId: number, channel: string, ...args: any[]): void {
    }

    sendToHost(channel: string, ...args: any[]): void {
    }

    setMaxListeners(n: number): this {
        return this;
    }

}