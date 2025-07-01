const fs = require('fs');
const path = require('path');

function cleanFolder(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`✔ Carpeta ${dir} limpiada`);
  }
}

cleanFolder('screenshots');
cleanFolder('reports');
