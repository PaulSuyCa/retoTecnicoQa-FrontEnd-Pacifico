import { After, Status } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';
import { CustomWorld } from './world';

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    if (this.page) {
      const dir = path.resolve('screenshots');
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const screenshotPath = `screenshots/${Date.now()}.png`;
      await this.page.screenshot({ path: screenshotPath });
      // Adjuntar al reporte de Cucumber (para HTML report)
      const screenshotBuffer = fs.readFileSync(screenshotPath);
      this.attach(screenshotBuffer, 'image/png');
    }
  }
});
