var dgram = require('dgram');

class NodeClient {

    constructor(ip, port) {
        this._ip = ip;
        this._port = port;
        this._client = dgram.createSocket('udp4');
    }

    sendMetric(name, value, type, sampleRate = null) {
        var datagram = `${name}:${value}|${type}`;
        if (sampleRate)
            datagram += `|@${sampleRate}`;

        var message = new Buffer(datagram);
        this._client.send(message, 0, message.length, this._port, this._ip);
        console.log("Sent: " + datagram);
    }
};

const MetricTypes = {
    Counter: "c",
    Gauge: "g",
    Set: "s",
    Timer: "ms"
}

module.exports = {
    NodeClient,
    MetricTypes
}



