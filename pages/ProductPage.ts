import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async selectAllCourtBasketball() {
    await this.page.getByRole('link', { name: 'Picture of All-Court' }).click();
  }

  async addToCart(quantity = 3) {
    await this.page.locator('#addtocart_13_AddToCart_EnteredQuantity').fill(quantity.toString());
    await this.page.getByRole('link', { name: ' Add to cart' }).click();
  }

  async checkout() {
    const cartOverlay = this.page.locator('#offcanvas-cart');
    await expect(cartOverlay).toBeVisible();
    // Use a text locator to click the Checkout action
    await cartOverlay.locator('text=/Checkout/i').first().click();
  }
}