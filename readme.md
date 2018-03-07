# Welcome to StatsDNodeClient
It is an educational project that shows how to use UDP to create a lightweight nodeJS service to send metrics to StatsD.

## Instantiating the Service

```
let NodeClient = require('./nodeClient').NodeClient;
const client = new NodeClient("10.168.1.12", 8125);
```
where port and I* are the respective port and IP of the statsD client

## Sending metrics to StatsD
```
let MetricTypes = require('./nodeclient').MetricTypes;
client.sendMetric("Metric.Name.GoesHere", value, MetricTypes.Timer);
```

## Requirements
To run this project you'll need NodeJS 6.1+

## Running the project

Running the small test

```node index.js```

