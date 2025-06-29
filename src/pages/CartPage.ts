import { Page } from 'playwright';

export class CartPage {
  constructor(private page: Page) {}

  async getCartItemsCount(): Promise<number> {
    return this.page.locator('.cart_item').count();
  }

  async getProductNames(): Promise<string[]> {
    return this.page.locator('.inventory_item_name').allInnerTexts();
  }
  async proceedToCheckout() {
    await this.page.waitForSelector('button[data-test="checkout"]', { state: 'visible' });
    await this.page.click('button[data-test="checkout"]');
  }
}
