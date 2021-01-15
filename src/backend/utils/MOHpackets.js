const { Packet } = require("./Packet.js");
const dgram = require("dgram");
const _buffer = "\xFF\xFF\xFF\xFF\x02";

module.exports = {
  sendPacket: function(ip, port, command, callback) {
    var client = dgram.createSocket("udp4");
    var message = Buffer.from(_buffer + command, "binary");

    client.send(message, 0, message.length, port, ip, function(err, bytes) {
      if (err) {
        return err;
      }
    });

    client.on("message", function(message, rinfo) {
      callback(message.toString("utf8").substring(4));
    });

    client.on("error", function(e) {
      return e;
    });
  },
  pingpong: function(ip, port, command, callback) {
    var frames = [];
    var client = dgram.createSocket("udp4");
    var message = Buffer.from(_buffer + command, "binary");

    client.send(message, 0, message.length, port, ip, function(err, bytes) {
      if (err) {
        return err;
      }

      var packet = new Packet(ip, port, new Date().getTime(), "");
      frames.push(packet);
    });

    client.on("message", function(message, rinfo) {
      for (let i = 0; i < frames.length; i++) {
        if (frames[i].ip == rinfo.address && frames[i].port == rinfo.port) {
          frames[i].stoptime = new Date().getTime();
          callback(frames[i].stoptime - frames[i].starttime);
        } else {
          console.log("server frame not found");
        }
      }
    });

    client.on("error", function(e) {
      return e;
    });
  },
};
