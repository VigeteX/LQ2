import { Page, Locator, expect } from '@playwright/test';
import BasePage from './base.page';

export class MainPage extends BasePage{
  readonly page: Page;
  readonly searchInput: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.searchInput = page.locator('#q');
  }

  async open() {
    await this.page.goto('https://www.redmine.org/');
    await this.expectURLContains('https://www.redmine.org/')
  }

  async search(text: string) {
    await this.searchInput.fill(text);
    await this.searchInput.press('Enter');
  }
}