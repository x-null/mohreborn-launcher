import {Game} from "@/shared/Game";
import WebSocket from "ws";

const MASTER_SERVER_WS_URI = 'ws://master.x-null.net:8080/';

interface ServerEntry {
    alive: string
    gameid: string
    gsstatus: string
    ip: string
    port: number
    queryport: number
    status: string
}

export interface ServerOverview {
    game: Game
    alive: Date
    ip: string
    port: number
    queryPort: number
    status: any
    gsStatus: any
    ping: number
}

export type Servers = Map<Game, ServerOverview[]>

export class MasterServer {
    public queryServers(...games: Game[]): Promise<Servers> {
        return new Promise<Servers>((resolve, reject) => {
            let requestIdx = 0;
            let socket = new WebSocket(MASTER_SERVER_WS_URI);
            let result: Servers = new Map<Game, ServerOverview[]>();

            socket.on('open', () => {
                socket.on('message', (data: string) => {
                    result.set(games[requestIdx], this.createServerOverview(games[requestIdx], JSON.parse(data)));
                    requestIdx++;

                    if (requestIdx == games.length) {
                        socket.close();
                        resolve(result);
                    }
                });

                games.forEach(game => socket.send(`getservers ${game.toLowerCase()}`));
            });
            socket.on('error', ev => reject(ev));
        });
    }

    private createServerOverview(game: Game, data: ServerEntry[]): ServerOverview[] {
        return data.map(entry => {
            return {
                // @ts-ignore
                game: Game[entry.gameid.toUpperCase()],
                alive: this.toValidDate(entry.alive),
                ip: entry.ip,
                port: entry.port,
                queryPort: entry.queryport,
                status: this.parseStatus(entry.status),
                gsStatus: this.parseStatus(entry.gsstatus),
                ping: 999
            }
        });
    }

    //FIXME This doesn't support daylight saving time changes...
    private toValidDate(dateTimeString: string): Date {
        let currentTimeZone = 0 - new Date().getTimezoneOffset();
        let dateStr = dateTimeString.split(' ')[0].split('-');
        let timeStr = dateTimeString.split(' ')[1].split(':');
        return new Date(+dateStr[0], +dateStr[1] - 1, +dateStr[2], (+timeStr[0]) + 7, +timeStr[1] + currentTimeZone, +timeStr[2]);
    }

    private parseStatus(status: string) {
        let keysAndValues = status.substring(1, status.length - 1).split('\\');
        let result: any = {};
        for (let i = 0; i < keysAndValues.length; i += 2) {
            result[keysAndValues[i]] = keysAndValues[i + 1];
        }
        return result;
    }
}