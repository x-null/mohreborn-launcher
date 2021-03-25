import {Application} from "@/gui/Application";
import {ipc} from "@/gui/ipc/IpcProvider";

export interface TitleBarItem {
    id: number
    name: string
    icon: string[]
    handle: () => void
}

export const DEFAULT_TITLEBAR_ITEMS: TitleBarItem[] = [
    {
        id: 1,
        name: "minimize",
        icon: ["far", "window-minimize"],
        handle: () => new Application(ipc()).minimize()
    },
    {
        id: 2,
        name: "maximize",
        icon: ["far", "square"],
        handle: () => new Application(ipc()).maximize()
    },
    {
        id: 2,
        name: "close",
        icon: ["fas", "times"],
        handle: () => new Application(ipc()).close()
    }
];