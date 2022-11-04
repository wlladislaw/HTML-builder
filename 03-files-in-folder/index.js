const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, '/secret-folder'), (err, files) => {
  if (err) console.log(err);
  else {
    console.log('\nCurrent directory files:');
    files.forEach((file) => {
      fs.stat(__dirname + '/secret-folder/' + file, (error, stats) => {
        if (error) {
          console.log(error);
        } else {
          if (stats.isFile()) {
            console.log(
              `${file.split('.').shift()} - ${path
                .extname(file)
                .replace(/[^a-zа-я]/g, '')} - ${stats.size} `
            );
          }
        }
      });
    });
  }
});
