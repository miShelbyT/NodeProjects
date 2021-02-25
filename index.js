// const { readFile, readFileSync } = require('fs');
const { readFile } = require('fs').promises;
const myModule = require('./my-module');
const express = require('express');
const app = express();

app.get('/', async (request, response) => {

  response.send( await readFile('./home.html', 'utf8' ) );

});


app.listen(process.env.PORT || 3000, () => console.log(`Appppp available on http://localhost:3000`));

// async function hello() {
//  const file = await readFile('./hello.txt', 'utf8');
//  console.log(file)
// }

// hello()
// console.log(myModule)




// readFileSync blocks all other code i.e., it executes first
// const txt = readFileSync('./hello.txt', 'utf8');
// console.log(txt)

// readFile function takes three arguments (the last is a c/b function) this code will be executed after the other files have been compiled/executed... this is called non-blocking
// readFile('./hello.txt', 'utf8', (err, file) => {
//   console.log(file)
// })


// console.log('hello world')
// console.log(process.env.USER)

// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('snack', () => {
//   console.log('snacktime! 🍉')
// })

// eventEmitter.emit('snack');
// eventEmitter.emit('snack');
// eventEmitter.emit('snack');