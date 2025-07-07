import { Page } from 'playwright';
import { expect } from 'chai';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('input[data-test="firstName"]', firstName);
    await this.page.fill('input[data-test="lastName"]', lastName);
    await this.page.fill('input[data-test="postalCode"]', postalCode);
    await this.page.click('input[data-test="continue"]');
  }

  async finishOrder() {
    await this.page.click('button[data-test="finish"]');
  }

  async getConfirmation(): Promise<string | null> {
    return this.page.textContent('.complete-header');
  }

  //Metodos Assertions 
  async assertCheckout(confirmMsg: string[], confirmation: string) {
    expect(confirmMsg, '[ERROR] No se encontró el producto seleccionado').to.include(confirmation);
    console.info(`[INFO] El producto seleccionado: "${confirmation}" está en el carrito`);
  }
}
