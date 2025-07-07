import { Page } from 'playwright';
import { expect } from 'chai';

export class CartPage {
  constructor(private page: Page) {}

  async getCartItemsCount(): Promise<number> {
    await this.page.waitForSelector('.cart_item', { timeout: 5000 }).catch(() => {});
    return this.page.locator('.cart_item').count();
  }

  async getProductNames(): Promise<string[]> {
    return this.page.locator('.inventory_item_name').allInnerTexts();
  }

  async proceedToCheckout() {
    await this.page.waitForSelector('button[data-test="checkout"]', { state: 'visible' });
    await this.page.click('button[data-test="checkout"]');
  }

  // Métodos Assertions mejorados
  async assertCountProduct(count: string) {
    const expected = parseInt(count, 10);
    const actual = await this.getCartItemsCount();
    const productos = await this.getProductNames();

    expect(
      actual,
      `[ERROR] El contador del carrito fue: ${actual}, esperado: ${expected}. Productos actuales: ${productos.join(', ')}`
    ).to.equal(expected);

    console.info(`[INFO] El contador del carrito es: ${actual}`);
  }

  async assertProduct(productNames: string[], productName: string) {
    expect(productNames, '[ERROR] No se encontró el producto seleccionado').to.include(productName);
    console.info(`[INFO] El producto seleccionado: "${productName}" está en el carrito`);
  }
}
