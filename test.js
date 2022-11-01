// const { stdin, stdout } = process;
// stdout.write('Как тебя зовут?\n');
// stdin.on('data', (data) => {
//   // const dataStringified = data.toString();

//   // stdout.write(dataStringified.split('').reverse().join(''));

//   const name = data.toString();
//   const reverseName = name.split('').reverse().join('');
//   stdout.write(`Твоё имя наоборот ${reverseName}`);

//   process.exit();
// });

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Prints: 2

