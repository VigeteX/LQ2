import { expect, test } from '@playwright/test';
import SearchPage from '../pages/search.page';
import * as searchData from '../data/searchData.json';

test.describe('Search', () =>{
  test('None checkboxes search with data in "Search" field', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.open();

    await searchPage.fillSearchField(searchData.query);

    await searchPage.toggleCheckboxes({
      'issues': false,
      'news': false,
      'documents': false,
      'changesets': false,
      'wiki_pages': false,
      'messages': false,
      'projects': false,
      'redmine_plugins': false,
    });

    await searchPage.submitSearch();

    await searchPage.expectCheckboxesState({
      'issues': true,
      'news': true,
      'documents': true,
      'changesets': true,
      'wiki_pages': true,
      'messages': true,
      'projects': true,
      'redmine_plugins': true,
    });

    const resultsCount = await searchPage.results.count();
    expect(resultsCount).toBeGreaterThan(0);
  });
});