// dependency injection

const capitalize = require('./capitalize.js');

describe ('As a user I want a way to capitalize my string', () => {

// our unit test
test('Should capitalize a string', () => {
  let output = capitalize('kam');
  expect(output).toEqual('KAM');
  
    }
  )}
)