let NodeClient = require('./nodeClient').NodeClient;
let MetricTypes = require('./nodeclient').MetricTypes;


const client = new NodeClient("10.168.1.12", 8125);

var value = 100;

function sendMetric() {
    client.sendMetric("FromNode.ClientA.MetricX", value, MetricTypes.Timer);
    if (value < 10000) {
        value += 100;
        setTimeout(sendMetric, 2000);
    }
}
sendMetric();








