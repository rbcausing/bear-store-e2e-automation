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

    // Try a text-based locator for "Checkout"
    const checkoutButton = cartOverlay.locator('text=/Checkout/i').first();
    await expect(checkoutButton).toBeVisible({ timeout: 5000 });
    await checkoutButton.click();

    // If this still fails, uncomment the next line to debug the overlay's HTML:
    // console.log(await cartOverlay.innerHTML());
  }
}