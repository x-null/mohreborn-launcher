class Server {
    constructor(game, hostname, map, players, maxplayers, gametype, ip) {
        this.game = game;
        this.hostname = hostname;
        this.map = map;
        this.players = players;
        this.maxplayers = maxplayers;
        this.gametype = gametype;
        this.ip = ip;
        //   this.ping = ping;
    }
}
exports.Server = Server