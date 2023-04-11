'use strict'

const base64 = require('base-64');
const bcrypt = require('bcrypt');

const name = 'Kameron';
const password = 'mysecretstring';

const encodedName = base64.encode(name);
const decodedName = base64.decode(name);

const authString = `${name}:${password}`
const encodedAuthString = base64.encode(`${authString}`)

console.log('ENCODED AUTH STRING ', encodedAuthString);
console.log('DECODED AUTH STRING', base64.decode(encodedAuthString))
console.log(encodedName, decodedName);

bcrypt.hash('Kameron', 10).then(hashedString => {
  console.log('Here is Our Hashed String: ', hashedString);

bcrypt.compare('Kameron',`${hashedString}25375329`).then( isTheSame => {
  console.log('Do the Strings Match??', isTheSame);
  })
});