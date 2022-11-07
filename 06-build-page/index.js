const path = require('path');
const fs = require('fs/promises');

async function createHtml() {
  try {
    fs.mkdir(
      path.join(__dirname, 'project-dist'),
      { recursive: true },
      (err) => {
        if (err) throw err;
        console.log('Папка не создана');
      }
    );

    let formattedTemplate = await changeTemplate();

    await fs.writeFile(
      path.join(__dirname, 'project-dist', 'index.html'),
      formattedTemplate
    );

    let bundle = [];
    const files = await fs.readdir(path.join(__dirname, 'styles'), {
      withFileTypes: true,
    });

    for (let file of files) {
      const sourceFiles = path.join(__dirname, 'styles', `${file.name}`);

      if (file.isFile() && path.extname(sourceFiles) === '.css') {
        bundle.push(await fs.readFile(sourceFiles, 'utf8'));
      }
    }
    await fs.writeFile(
      path.join(__dirname, 'project-dist', 'style.css'),
      bundle.join('')
    );

    await fs.rm(
      '06-build-page/project-dist/assets',
      { force: true, recursive: true },
      (err) => {
        if (err) {
          console.error(err);
        } else {
          copyDir();
        }
      }
    );
    copyDir(
      path.join(__dirname, 'assets'),
      path.join(__dirname, 'project-dist/assets')
    );
  } catch (error) {
    console.log(error);
  }
}

async function changeTemplate() {
  let template = await fs.readFile(
    path.join(__dirname, 'template.html'),
    'utf-8'
  );
  const components = await fs.readdir(path.join(__dirname, 'components'));
  for (let file of components) {
    const stats = await fs.stat(path.join(__dirname, 'components', file));

    if (stats.isFile()) {
      const fileName = path.parse(path.join(__dirname, 'components', file));

      if (fileName.ext === '.html') {
        let tag = `{{${fileName.name}}}`;

        if (template.includes(tag)) {
          const tempTag = await fs.readFile(
            path.join(__dirname, 'components', file)
          );
          template = template.replace(tag, tempTag);
        }
      }
    }
  }
  return template;
}

async function copyDir(src, dest) {
  const entries = await fs.readdir(src, { withFileTypes: true });
  await fs.mkdir(dest);
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

createHtml();
