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

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// let m = 0;
// myEmitter.on('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// // Prints: 1
// myEmitter.emit('event');
// // Prints: 2


// console.log(__filename);

// const { stdout } = process;
// const flag = process.argv[2];

// if (flag === '-d') {
//     stdout.write(__dirname);
// } else if (flag === '-f') {
//     stdout.write(__filename);
// } else {
//     stdout.write('Пожалуйста, запустите программу с флагом -d или -f');
// }

// const flagIndex = process.argv.indexOf('-m');
// if (flagIndex !== -1) {
//   const message = process.argv[flagIndex + 1];
//   console.log(message);
// }

// const productionMode = process.env.PRODUCTION === "true";
// if (productionMode) {
//   console.log('Application is running in production mode');
//   // do production things
// } else {
//   console.log('Application is running in development mode');
//   // do dev things
// }

// const os = require('os');

// // Платформа
// console.log(os.platform());

// // Архитектура
// console.log(os.arch());

// // Информация о CPU
// console.log(os.cpus());

// // Общий объём памяти
// console.log(os.totalmem());

// // Объём свободной памяти
// console.log(os.freemem());

// // Корневая директория
// console.log(os.homedir());

// // Время работы системы
// console.log(os.uptime());

// // Символ окончания строки в данной системе
// console.log(os.EOL);

// const http = require('http');

// const PORT = 3000;

// const requestHandler = (request, response) => {
//     const { method, url } = request;
//     const heading = `<h1 style="color: red">${url} page</h1>`;
//     const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
//     console.log(`Получен ${method}-запрос на ${url}`);
//     response.write(heading);
//     response.end(content);
// };

// const server = http.createServer(requestHandler);

// server.listen(PORT, 'localhost', () => {
//     console.log(`Сервер запущен на порту ${PORT}`);
// });

// require('colors');
// const text = 'Hello, world!';
// console.log(text.rainbow);


// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('start', (first, second) => console.log(`${first} and ${second}`));

// emitter.emit('start', 1, 2); // 1 and 2

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// const handler1 = () => console.log(1);
// const handler2 = () => console.log(2);

// emitter.on('start', handler1);
// emitter.on('start', handler2);

// emitter.emit('start'); // выводит 1, затем 2


const fs = require('fs');

const stream = fs.createReadStream('source2.txt', 'utf-8');

let data = '';

stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log('End', data));
stream.on('error', error => console.log('Error', error.message));
