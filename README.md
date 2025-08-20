# Bear Store E2E Automation

End-to-end test automation for https://bearstore-testsite.smartbear.com/ using Playwright (TypeScript), Page Object Model (POM), and Jenkins CI/CD. Built with GitHub Copilot for efficient coding.

## Key Features

- Playwright with POM for e-commerce flows (e.g., basketball purchase checkout).
- Jenkins pipeline for automated test execution on GitHub commits, secured with a fine-grained GitHub PAT (Bear-Store-E2E-Jenkins).
- Cross-browser testing (Chromium; expandable to Firefox/WebKit).
- JUnit and HTML reports for CI integration, with robust JUnit handling.
- Leveraged GitHub Copilot for test scripting, Jenkinsfile optimization, and debugging (e.g., removed interactive show-report step).

## Setup

1. Clone: `git clone https://github.com/rbcausing/bear-store-e2e-automation.git`
2. Install: `npm install`
3. Browsers: `npx playwright install`
4. Run Tests: `npx playwright test`

## Test Scenarios

- **Basketball Purchase**: Select category, add items (x3), checkout as guest, fill info, select cash-on-delivery, confirm order.

## Jenkins CI/CD

- `Jenkinsfile` automates checkout, dependency installation, test execution, and report archiving.
- Secured Jenkins pipeline with a fine-grained GitHub PAT (Bear-Store-E2E-Jenkins) for automated E2E testing.
- Generates Playwright HTML and JUnit reports with Windows-compatible commands.

## Future Enhancements

- Expand cross-browser testing (Firefox, WebKit).
- Document test cases in TestRail for test management.
- Explore AI-driven tools like Testim for self-healing locators in separate scripts.

Part of my QA journey from beginner to pro. Connect on LinkedIn: www.linkedin.com/in/ross-causing-aa99b3136 !