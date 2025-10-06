import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  //globalTimeout: 60 * 60 * 1000,
  //timeout: 2 * 60 * 1000,
  //expect: { timeout: 5_000},
  
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 5 : 5,
  //reporter: [['html', {open: 'never', outputFolder:'../reports/html'}], ['github']],//'html',//[['html', {open: 'never', outputFolder:'../reports/html'}], [process.env.CI ? 'dot' : ' list'], ['github']]
  reporter: 'list', //'line' или 'list' или 'dot'
  use: {
    //baseURL: 'https://www.redmine.org/',
    baseURL: process.env.BASE_URL,
    screenshot: process.env.CI ? 'only-on-failure' : 'on',
    video: process.env.CI ? 'retain-on-failure' : 'on',
    trace: process.env.CI ? 'retain-on-failure' : 'on',
    actionTimeout: 20 * 1000,
    navigationTimeout: 20 * 1000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport:{width: 1920, height: 1080} },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], viewport:{width: 1920, height: 1080} },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], viewport:{width: 1920, height: 1080} },
    },
  ],
});
