import { setWorldConstructor, Before, After, IWorldOptions, World, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from 'playwright';

setDefaultTimeout(60 * 1000); // 60 segundos

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  // Opcional: para compartir POM entre steps
  loginPage!: any;
  inventoryPage!: any;
  cartPage!: any;
  checkoutPage!: any;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
  if (this.browser) {
    await this.browser.close();
  }
});
