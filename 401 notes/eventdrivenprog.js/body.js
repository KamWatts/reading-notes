'use strict'

// this file assigns whose job it is to repond appropriately
const  { emitter, eventPool } = require('./eventPool')

const state = {
  temperature: 98,
  eyesight: 20,
  mobility: 'full',
  intelligence: 98,
  hunger: 70
}

// let temperatureEvent = eventPool[0];
// let hungerEvent = eventPool[1];
// let intelligenceEvent = eventPool[2];


// emitter.on(temperatureEvent, function(payload) {
//   console.log('Temperature payload emitted', payload)
//   state.temperature = payload.temperature;
//   console.log('Updated State', state);
// }); 

emitter.on('Update_State', (payload) => {
  let property = Object.keys(payload)[0];
  state[property] = payload[property];
  console.log(state)
})

require('./brain');
require('./circulation');
require('./stomach');