# E2E tests

This suite verifies that:

- Meteor starts and serves the app
- `/` loads the core shell (`#sidebar`)
- `/changes` loads and can navigate to a real recipe page

## Local run

```bash
cd /Users/matthias/Sites/rezeptee/app
npx playwright install chromium
npm run test:e2e
```

## Notes

- The test creates a temporary recipe via Meteor method `saveRezept`, navigates to it from `/changes`, and archives it again at the end.
- Playwright starts Meteor automatically via `webServer` in `playwright.config.ts`.

