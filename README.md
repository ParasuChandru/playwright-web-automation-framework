# Playwright Web Automation Framework

Standard Playwright + TypeScript web automation framework using Page Object Model, reusable fixtures, utilities, sample UI tests, and CI workflow.

## Features
- Playwright Test with TypeScript
- Page Object Model structure
- Reusable custom fixtures
- Environment variable support with `.env`
- Sample UI and API tests
- HTML reports, screenshots, videos, and traces
- GitHub Actions workflow for CI validation

## Project Structure
```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── src/
│   ├── fixtures/
│   │   └── testFixtures.ts
│   ├── pages/
│   │   ├── BasePage.ts
│   │   └── HomePage.ts
│   └── utils/
│       ├── env.ts
│       └── testData.ts
├── tests/
│   ├── api-health.spec.ts
│   └── example.spec.ts
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

## Prerequisites
- Node.js 20+
- npm 9+

## Setup
```bash
npm install
npx playwright install
cp .env.example .env
```

## Environment Variables
```env
BASE_URL=https://example.com
HEADLESS=true
BROWSER=chromium
DEFAULT_TIMEOUT=10000
```

## Available Scripts
```bash
npm test
npm run test:headed
npm run test:ui
npm run test:debug
npm run test:smoke
npm run test:chrome
npm run test:firefox
npm run test:webkit
npm run lint:types
npm run report
```

## Design Notes
- `BasePage` contains common page actions and assertions.
- `HomePage` demonstrates the Page Object Model pattern.
- `testFixtures.ts` centralizes reusable page object setup.
- `testData.ts` keeps expected values outside test logic.
- The sample framework uses `https://example.com` for safe default execution.

## CI
GitHub Actions workflow is included in `.github/workflows/playwright.yml` and runs type checks plus Playwright tests on push, pull request, and manual dispatch.
