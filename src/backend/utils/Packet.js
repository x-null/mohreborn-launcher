class Packet {
    constructor(ip, port, starttime, stoptime) {
        this.ip = ip;
        this.port = port;
        this.starttime = starttime;
        this.stoptime = stoptime;
    }
}
exports.Packet = Packet