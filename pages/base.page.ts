import { Page, expect } from '@playwright/test';

export default class BasePage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(path: string = '/') {
    await this.page.goto(path, {
      waitUntil: 'domcontentloaded',
      timeout: 120000,
    });
  }

  async expectURLContains(text: string) {
    await expect(this.page).toHaveURL(new RegExp(text));
  }
}