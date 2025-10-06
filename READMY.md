# Playwright UI Tests for Redmine Search Page

## Summary
This repository contains automated UI tests for the **Search page of Redmine** (https://www.redmine.org).  
Tests are written using **Playwright** and **TypeScript** following the **Page Object Model (POM)** design pattern.  
Each test case corresponds to a manual test from the specification document.

---

## Requirements
Before running the tests, make sure you have installed the following:
- Installed **Playwright Test Framework**

---

## Steps to Install
1. Clone this repository:
   ```bash
   git clone https://github.com/VigeteX/LQ2-Playwright-framework
2. Open the project folder in VS Code.
3. Open the terminal and install Playwright dependencies:
    npm install
    npx playwright install

Steps to Launch Tests:
    To execute all test cases:
        npx playwright test
    To execute a single test (for example, first test case):
        npx playwright test tests/1.spec.ts

├── pages/
│   ├── base.page.ts          # Base page class with shared methods
│   ├── main.page.ts          # Page Object for Redmine Main Page
│   └── search.page.ts        # Page Object for Redmine Search Page
├── tests/
│   ├── 1.spec.ts             # Transition to the search page from main page
│   ├── 2.spec.ts             # All checkboxes search with data in "Search" field
│   ├── 3.spec.ts             # None checkboxes search with data in "Search" field
│   ├── 4.spec.ts             # Empty field search with all checkboxes check
│   └── 5.spec.ts             # Empty field search with all checkboxes uncheck
├── test-data/
│   └── searchData.json       # Test data file (contains search queries)
├── playwright.config.ts
└── README.md
