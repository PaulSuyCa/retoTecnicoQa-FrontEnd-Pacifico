import { Page } from 'playwright';

export class InventoryPage {
  constructor(private page: Page) {}

  async addProductToCart(product: string) {
    await this.page.click(`button[data-test="add-to-cart-${product}"]`);
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  async getCartCount(): Promise<number> {
    const badge = await this.page.locator('.shopping_cart_badge');
    return (await badge.count()) > 0 ? parseInt(await badge.innerText()) : 0;
  }
}
