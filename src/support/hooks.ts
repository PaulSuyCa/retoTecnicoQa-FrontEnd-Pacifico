import { After, Status } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';
import { CustomWorld } from './world';

After(async function (this: CustomWorld, scenario) {
  // 1. Screenshot solo si el escenario falló
  if (scenario.result?.status === Status.FAILED && this.page) {
    const dir = path.resolve('screenshots');
    fs.mkdirSync(dir, { recursive: true }); // crea carpeta si no existe

    const nombreArchivo =
      scenario.pickle.name.replace(/\s+/g, '_').replace(/[^\w]/g, '') +
      '-' +
      Date.now() +
      '.png';
    const screenshotPath = path.join(dir, nombreArchivo);

    await this.page.screenshot({ path: screenshotPath });
    const screenshotBuffer = fs.readFileSync(screenshotPath);
    this.attach(screenshotBuffer, 'image/png');
  }
  // 2. Cierra el browser al final, siempre
  if (this.browser) {
    await this.browser.close();
  }
});
