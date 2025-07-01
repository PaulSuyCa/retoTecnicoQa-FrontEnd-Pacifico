import { setWorldConstructor, Before, After, IWorldOptions, World, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from 'playwright';

// Aumenta el timeout por defecto de los steps a 60 segundos (por si las pruebas tardan en CI/CD)
setDefaultTimeout(60 * 1000);

// Define tu "CustomWorld", es decir, el contexto de cada escenario
export class CustomWorld extends World {
  browser!: Browser;           // Instancia del browser Playwright
  context!: BrowserContext;    // Contexto (pestaña o ventana aislada)
  page!: Page;                 // Página actual (donde interactúas)

  // Puedes declarar aquí objetos POM para compartir entre steps
  loginPage!: any;
  inventoryPage!: any;
  cartPage!: any;
  checkoutPage!: any;

  constructor(options: IWorldOptions) {
    super(options); // Necesario para inicializar el World de Cucumber
  }
}

// Establece tu clase como el "World" por defecto de Cucumber
setWorldConstructor(CustomWorld);

// Hook Before: se ejecuta antes de cada escenario
Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: true }); // Inicia Chrome en modo headless
  this.context = await this.browser.newContext();           // Nuevo contexto/pestaña limpia
  this.page = await this.context.newPage();                 // Nueva página
});
