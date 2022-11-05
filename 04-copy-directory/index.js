const fs = require('fs');
const path = require('path');

fs.rm(
  '04-copy-directory/files-copy',
  { force: true, recursive: true },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      copyDir();
    }
  }
);

function copyDir() {
  fs.mkdir('04-copy-directory/files-copy', { recursive: true }, (err) => {
    if (err) throw err; // не удалось удалить папку
    console.log('Папка успешно создана');
  });

  fs.readdir(path.join(__dirname, 'files'), (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach((file) => {
        fs.copyFile(
          path.join(__dirname, `/files/${file}`),
          path.join(__dirname, `/files-copy/${file}`),
          (err) => {
            if (err) {
              console.log('Error Found:', err);
            } else {
              console.log('file add ');
            }
          }
        );
      });
    }
  });
}
