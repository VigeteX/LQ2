import { Page, expect } from '@playwright/test';

export default class BasePage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(url: string) {
    await this.page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
  }

  async expectURLContains(text: string) {
    await expect(this.page).toHaveURL(new RegExp(text));
  }
}