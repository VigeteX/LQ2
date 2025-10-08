Playwright UI Tests for Redmine Search Page
Summary of Repository

This repository contains automated UI tests for the Search page of Redmine (https://www.redmine.org).
Tests are written using Playwright and TypeScript following the Page Object Model (POM) design pattern.
Each test case corresponds to a manual test from the specification document.

---
Requirements
Before running the tests, make sure you have installed the following:

    Node.js v18+ (LTS recommended)

    npm v9+

    Installed Playwright Test Framework

    Allure CLI installed globally (optional, for report generation)

    BASE_URL environment variable (example provided in env.example file)


---

## Steps to Install
1. Clone this repository:
    git clone https://github.com/VigeteX/LQ2-Playwright-framework.git
    cd LQ2-Playwright-framework
2. Open the project folder in VS Code.
3. Install dependencies:
    npm install
4. Install Playwright browsers:
    npx playwright install --with-deps

## Steps to Launch Tests
1. Execute all test cases:
    npx playwright test
2. Execute a single test case:
    npx playwright test tests/transitionToSearchPage.spec.ts
3. Run tests in headed mode:
    npm run test:headed
4. Show Playwright HTML report
    npm run test:report
5. Run tests in debug mode
    npm run test:debug
6. Generate code snippet for a specific page
    npm run test:generate

## Allure Report

You can view the latest Allure report here:  
[https://vigetex.github.io/LQ2/](https://vigetex.github.io/LQ2/)


├── pages/
│   ├── base.page.ts          # Base page class with shared methods
│   ├── main.page.ts          # Page Object for Redmine Main Page
│   └── search.page.ts        # Page Object for Redmine Search Page
├── tests/
│   ├── [text](tests/transitionToSearchPage.spec.ts).spec.ts             # Transition to the search page from main page
│   ├── 2.spec.ts             # All checkboxes search with data in "Search" field
│   ├── 3.spec.ts             # None checkboxes search with data in "Search" field
│   ├── 4.spec.ts             # Empty field search with all checkboxes check
│   └── 5.spec.ts             # Empty field search with all checkboxes uncheck
├── test-data/
│   └── searchData.json       # Test data file (contains search queries)
├── playwright.config.ts
└── README.md
