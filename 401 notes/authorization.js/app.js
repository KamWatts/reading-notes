'use strict'

require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const cors = require('cors');
app.use(express.json());
const base64 = require('base-64')
const { Sequelize, DataTypes } = require('sequelize');
const PORT = process.env.PORT || 3002;
const SQL_URL = process.env.SQL_URL || 'sqlite:memory';

const sequelize = new Sequelize(SQL_URL);

const UserModel = sequelize.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

UserModel.beforeCreate(async user => {
  user.password = await bcrypt.hash(user.password, 5)
})

app.use(cors());

// hit this route before any middleware

app.post('/signup', async (response, request, next) => {
  let newUser = await UserModel.create(request.body);
  response.json(newUser);
})

app.use(basicAuth);

async function basicAuth(request, response, next) {
// auth stuff occurs here
  console.log(request.header.authorization);
  if(!request.header.authorization) {
    response.status(401).send('YOUR ACCESS IS NOT AUTHORIZED');
    return;
  }
  // check if user lives in the DB
  let credentials = base64.decode(request.headers.authorization).split(' ')[1]; //Kameron:password
  let username = credentials.split(':')[0];
  let password = credentials.split(':')[1];

  // query DB find User where username === username
  let userFromDB = await UserModel.findOne({ where: {username: userName}});
  if (!userFromDB) {
    response.status(401).send('No user found')
    return;
  }
  // compare the password from the request with encrypted password
let isAuthentic = await bcrypt.compare(password, userFromDB.password);
  if (isAuthentic) {
    next()
  } else {
    response.status(401).send()
  }
}

app.get ('/message', (request, response, next) => {

  let message = [
    {text: 'I am a message'}
  ]
});


sequelize.sync().then(() => { 
  app.listen(PORT, () => {
  console.log('SERVER is running :', PORT)
  });
});