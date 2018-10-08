'use strict';

const debug = require('debug')('mk:network-ping-mqtt:config');

let config;

try {
  config = require('../config.json');
} catch (err) {
  console.error('Could not load "config.json" file. Did you copy the sample and adjust it?');
  process.exit(1);
}

if (!config.brainIP || !config.mqttURL) {
  console.error('You need to provide "brainIP" and "mqttURL" in the config..');
}

module.exports = {
  getMQTTURL,
  getMQTTTopicRoot,
  getMQTTCredentials,
};

function getMQTTURL() {
  const url = config.mqttURL;
  debug('Getting MQTT URL..', url);

  return url;
}

function getMQTTTopicRoot() {
  return config.mqttTopicRoot || '';
}

function getMQTTCredentials() {
  return {
    username: config.mqttUsername || '',
    password: config.mqttPassword || '',
  };
}