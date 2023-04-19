'use strict'

const Event = require('events');

const eventEmitter = new Event();

function test(payload) {
  console.log('I have been triggered', payload);
}

eventEmitter.on('Emitter on', test);
eventEmitter.emit('Emitter emitted', {name: 'Kameron'})