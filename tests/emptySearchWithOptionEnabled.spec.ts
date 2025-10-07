import { expect, test } from '@playwright/test';
import SearchPage from '../pages/search.page';

test.describe('Search', () =>{
  test('Empty field search with all checkboxes check', async ({ page }) => {
    const searchPage = new SearchPage(page);
    const checkboxesStates = {
      'all_words': true,
      'titles_only': true,
      'issues': true,
      'news': true,
      'documents': true,
      'changesets': true,
      'wiki_pages': true,
      'messages': true,
      'projects': true,
      'redmine_plugins': true,
    }

    await searchPage.open('/projects/redmine/search?scope=subprojects');

    await searchPage.fillSearchField('');

    await searchPage.toggleCheckboxes(checkboxesStates);

    await searchPage.expectCheckboxesState(checkboxesStates);

    await searchPage.submitSearch();

    const resultsCount = await searchPage.results.count();
    expect(resultsCount).toEqual(0)
  });
});
