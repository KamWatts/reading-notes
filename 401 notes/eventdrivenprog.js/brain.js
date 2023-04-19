'use strict'

const { emitter, eventPool } = require('./eventPool')

eventPool.forEach(event => {
  emitter.on(event, (payload) => {
    console.log('Brain received an update', event, payload);
  })
  emitter.emit('Update_State', payload);
});