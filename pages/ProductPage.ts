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

    // Try both link and button roles, and wait for visibility
    const checkoutButton = cartOverlay.getByRole('link', { name: /Checkout/i }).first();
    await expect(checkoutButton).toBeVisible({ timeout: 5000 });
    await checkoutButton.click();
  }
}