const dgram = require("dgram");
const _buffer = "\xFF\xFF\xFF\xFF\x02";

module.exports = {
  sendPacket: function(ip, port, command) {
    var client = dgram.createSocket("udp4");
    var sendMessage = Buffer.from(_buffer + command, "binary");

    client.send(sendMessage, 0, sendMessage.length, port, ip, function(
      err,
      bytes
    ) {
      if (err) return err;
      console.log("UDP message sent to " + ip + ":" + port);
    });

    client.on("error", function(e) {
      console.log(e);
      return e;
    });

    client.on("message", function(message, rinfo) {
      console.log("received: ", message.toString("utf8").substring(4));
      console.log(rinfo);
      return message.toString("utf8").substring(4);
    });
  },
};
