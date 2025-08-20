import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Where your test files will live
  fullyParallel: true,  // Run tests in parallel for efficiency
  forbidOnly: !!process.env.CI,  // Prevent .only() in CI
  retries: process.env.CI ? 2 : 0,  // Retry failed tests in CI
  workers: process.env.CI ? 1 : undefined,  // Parallel workers
  reporter: [
    ['junit', { outputFile: 'results.xml' }],
    ['html']
  ],  // Generate JUnit and HTML reports
  use: {
    trace: 'on-first-retry',  // Trace on retry for debugging
    baseURL: 'https://bearstore-testsite.smartbear.com/',  // Target site
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Add more browsers like firefox or webkit for cross-browser testing later
  ],
});