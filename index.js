'use strict';

const debug = require('debug')('mk:network-ping-mqtt:index');
const ping = require('ping');

const mqttClient = require('./lib/mqtt');

setInterval(() => {
  ping.promise.probe('google.com')
    .then((response) => {
      if (response.alive) {
        handleUp();
      }
    });
}, 10000);

function handleUp() {
  debug('Network is up');

  mqttClient.forwardValue(1);
}
