'use strict'

const Event = require('events');
const eventEmitter = new Event();

const eventPool = [
  'temperature',
  'hunger',
  'intelligence'
]

module.exports = {
  eventPool: eventPool,
  emitter: eventEmitter
}