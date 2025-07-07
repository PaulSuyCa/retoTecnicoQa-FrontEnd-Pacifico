import { Page } from 'playwright';
import { expect } from 'chai';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async getErrorMessage(): Promise<string | null> {
    return this.page.textContent('[data-test="error"]');
  }

  //Metodos Assertions 
  async assertOnInventoryPage(currentUrl: string) {
    const expectedFragment = 'inventory.html';
    if (currentUrl.includes(expectedFragment)) {
      console.info(`[INFO] Login exitoso. URL actual: ${currentUrl}`);
    } else {
      console.error(`[ERROR] Login fallido. Se esperaba que la URL contenga '${expectedFragment}', pero se encontró: ${currentUrl}`);
    }
    expect(currentUrl).to.include(expectedFragment);
  }

  async assertLoginErrorMessage(errorMsg: string | null) {
    expect(errorMsg, '[ERROR] No se encontró ningún mensaje de error en la pantalla').to.not.be.null;
    expect(errorMsg!.toLowerCase(), `[ERROR] Mensaje de error inesperado: "${errorMsg}"`).to.include('epic sadface');
    console.info(`[INFO] Mensaje de error mostrado correctamente: "${errorMsg}"`);
  }
}
