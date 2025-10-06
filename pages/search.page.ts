import { Page, Locator, expect } from '@playwright/test';
import BasePage from './base.page';

export default class SearchPage extends BasePage{
  public page: Page;
  public searchInput: Locator;
  public searchButton: Locator;
  public secondSearchInput: Locator;
  public results: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.searchInput = page.locator('#search-input');
    this.searchButton = page.locator('input[type="submit"][name="commit"]');
    this.secondSearchInput = page.locator('#search-input');
    this.results = page.locator('#search-results');
  }

  async open() {
    await this.page.goto('https://www.redmine.org/projects/redmine/search?scope=subprojects');
  }
  
  async fillSearchField(query: string) {
    await this.searchInput.fill(query);
  }

  async submitSearch() {
      await this.searchButton.click();
      await this.page.waitForLoadState('load');
  }

  async toggleCheckboxes(checkboxes:Record<string, boolean>){
      for (const [name, shouldBeChecked] of Object.entries(checkboxes)) {
        const checkbox = this.page.locator(`input[type="checkbox"][name="${name}"]`);
        const count = await checkbox.count();
        if (count === 0) throw new Error(`Checkbox "${name}" not found`);

        const isChecked = await checkbox.isChecked();
        if (shouldBeChecked && !isChecked) {
          await checkbox.check();
        } else if (!shouldBeChecked && isChecked) {
          await checkbox.uncheck();
        }
      }
      await this.expectCheckboxesState(checkboxes)
  }
  
  async expectCheckboxesState(expected: Record<string, boolean>) {
    for (const [name, shouldBeChecked] of Object.entries(expected)) {
      const checkbox = this.page.locator(`input[type="checkbox"][name="${name}"]`);
      const count = await checkbox.count();
      if (count === 0) throw new Error(`Checkbox "${name}" not found`);

      if (shouldBeChecked == true){
        await expect(checkbox).toBeChecked();
      } else if (shouldBeChecked == false){
        await expect(checkbox).not.toBeChecked();
      }
    }
  }
}