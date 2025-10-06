import { expect, test } from '@playwright/test';
import SearchPage from '../pages/search.page';

test.describe('Search', () =>{
  test('Empty field search with all checkboxes uncheck', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.open();

    await searchPage.fillSearchField('');

    await searchPage.toggleCheckboxes({
      'all_words': false,
      'titles_only': false,
      'issues': false,
      'news': false,
      'documents': false,
      'changesets': false,
      'wiki_pages': false,
      'messages': false,
      'projects': false,
      'redmine_plugins': false,
    });

    await searchPage.expectCheckboxesState({
      'all_words': false,
      'titles_only': false,
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

    const resultsCount = await searchPage.results.count();
    expect(resultsCount).toEqual(0)
  });
});
