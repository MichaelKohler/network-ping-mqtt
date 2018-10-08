'use strict';

const debug = require('debug')('mk:network-ping-mqtt:index');
const Monitor = require('ping-monitor');

const mqttClient = require('./lib/mqtt');

debug(`Starting monitor for internet access`);
const monitor = new Monitor({
  website: 'https://www.google.com',
  interval: 1,
});

monitor.on('up', handleUp);

function handleUp() {
  debug('Network is up');

  mqttClient.forwardValue(1);
}
