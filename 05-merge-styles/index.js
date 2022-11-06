const path = require('path');
const { readdir, writeFile, readFile } = require('fs/promises');

let bundle = [];

async function createBundle() {
  const files = await readdir(path.join(__dirname, 'styles'), {
    withFileTypes: true,
  });

  for (let file of files) {
    const sourceFiles = path.join(__dirname, 'styles', `${file.name}`);

    if (file.isFile() && path.extname(sourceFiles) === '.css') {
      bundle.push(await readFile(sourceFiles, 'utf8'));
    }
  }
  await writeFile(
    path.join(__dirname, 'project-dist', 'bundle.css'),
    bundle.join('')
  );
}
createBundle();
