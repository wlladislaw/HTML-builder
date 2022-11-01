const fs = require('fs');
const path = require('path');
const file = path.join(__dirname + '/text.txt');
const stream = new fs.ReadStream(file, { encoding: 'utf-8' });

stream.on('readable', function () {
  const data = stream.read();

  console.log(data);
});

stream.on('error', function(err){
  if(err.code == 'ENOENT'){
      console.log("Файл не найден");
  }else{
      console.error(err);
  }
});
