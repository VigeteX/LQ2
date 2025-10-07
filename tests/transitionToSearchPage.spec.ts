import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import SearchPage from '../pages/search.page';
import * as searchData from '../data/searchData.json';


test.describe('Transition', () =>{
  test('Transition to the search page from main page', async ({ page }) => {
    const mainPage = new MainPage(page);
    const searchPage = new SearchPage(page);

    await mainPage.open();
    await mainPage.expectURLContains('https://www.redmine.org/')

    await mainPage.search(searchData.query);
    
    await expect(searchPage.page).toHaveURL(new RegExp('https://www.redmine.org/projects/redmine/search'));
    await expect(searchPage.searchInput).toHaveValue('Redmine');
    const resultsCount = await searchPage.results.count();
    expect(resultsCount).toBeGreaterThan(0);
  });
})