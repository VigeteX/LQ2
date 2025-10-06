import { test, expect } from '@playwright/test';

test('Search on Redmine', async ({ page }) => {
  // ---------- Precondition ----------
  await page.goto('https://www.redmine.org/');

  // ---------- Step 1 ----------
  const searchInput = page.locator('#q'); // поле поиска в правом верхнем углу
  await searchInput.fill('Redmine');
  await expect(searchInput).toHaveValue('Redmine');

  // ---------- Step 2 ----------
  await searchInput.press('Enter');

  // Проверяем, что мы на странице поиска
  await expect(page).toHaveURL(/\/projects\/redmine\/search\?/);

  // Проверяем, что второе поле поиска (слева вверху) заполнено словом "Redmine"
  const secondSearchInput = page.locator('#search-input');
  await expect(secondSearchInput).toHaveValue('Redmine');

  // Проверяем, что результаты поиска появились
  const results = page.locator('#search-results');
  await expect(results).toBeVisible();
});