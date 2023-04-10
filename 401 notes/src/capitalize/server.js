'use strict'

const express = require('express');
const cors = require('cors');
const capitalize = require('./capitalize/capitalize')
const app = express();

app.use(cors());

app.get('/capitalize-me', function(request, response, next) {
// I want to send a message as a query parameter?
  if(request.query.message) {
// I want that message returned in the response as all caps
    let upperMessage = capitalize(request.query.message);
    response.send(upperMessage);
  } else {
  response.send('Please attach a message')
  }
});

app.listen(3001, () => {
  console.log('App is listening!');
});

module.exports = app