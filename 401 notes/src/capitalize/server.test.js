'use strict'

const supertest = require('supertest');
// We need out singleton
const app - require('./server');

describe('As a use I want to send a request and get a capitalized message', () => {
  test('Should return KAM when sending a GET request to /capitalize-me', async () ={
  let response = await request.get('/capitalise-me?message=kam');
    expect(response.text).toEqual('KAM');
  })
})