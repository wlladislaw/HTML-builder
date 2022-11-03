const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const fs = require('fs');
const path = require('path');

let writableStream = fs.createWriteStream(path.join(__dirname, 'data.txt'));

const rl = readline.createInterface({ input, output });

console.log('<<------ Hi! Make a notes ------>>');
rl.on('line', function (data) {
  writableStream.write(`${data}\n`);
  if (data === 'exit') {
    console.log('Have a nice day!');
    rl.pause();
  }
});
rl.on('close', () => {
  console.log('<<----- Have a nice day! ------>>');
});
