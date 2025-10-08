import { expect, test } from '@playwright/test';
import SearchPage from '../pages/search.page';
import * as searchData from '../data/searchData.json';

test.describe('Search', () =>{
  test('All checkboxes check search with data in "Search" field', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.open('/projects/redmine/search?scope=subprojects');

    await searchPage.fillSearchField(searchData.query);

    await searchPage.toggleCheckboxes({
      'all_words': false,
      'titles_only': false,
      'issues': true,
      'news': true,
      'documents': true,
      'changesets': true,
      'wiki_pages': true,
      'messages': true,
      'projects': true,
      'redmine_plugins': true,
    });

    await searchPage.submitSearch();

    const resultsCount = await searchPage.results.count();
    expect(resultsCount).toBeGreaterThan(0);
  });
});