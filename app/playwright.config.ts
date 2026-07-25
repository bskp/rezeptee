import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : [['list']],
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run start',
    // Bewusst url statt port: Meteor öffnet seinen Proxy, bevor das Bundle
    // gebaut ist. Auf den offenen TCP-Port zu warten heisst, mitten in den
    // Build zu navigieren -- der erste goto() stirbt dann an ERR_ABORTED.
    // Mit url pollt Playwright per HTTP bis zu einer echten Antwort.
    url: 'http://127.0.0.1:3000',
    timeout: 180_000,
    reuseExistingServer: !process.env.CI,
  },
});

