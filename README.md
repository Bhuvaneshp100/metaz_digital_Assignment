# metaz_digital_Assignment
Metaz Digital Assignment - Playwright Automation Framework

## Introduction

This framework utilizes Playwright for automating browser interactions and API testing. It provides a comprehensive solution for testing both UI and API aspects of web applications with built-in mocking capabilities..

## Prerequisites

Before running the framework, ensure you have the following installed:

Node.js version 16 or higher

npm (Node Package Manager) 8 or higher

Playwright (will be installed via dependencies)

Git for version control

## Environment git 
GitHub Repository
```bash
https://github.com/Bhuvaneshp100/metaz_digital_Assignment.git
```

## Clone the Repository
```bash
git clone https://github.com/Bhuvaneshp100/metaz_digital_Assignment.git
cd metaz_digital_Assignmen
```
## Environment

Ensure that all necessary dependencies are installed by running:
```bash
npm run DependencyInstall
```
## Environment Local
To run code:

For Playwright 
```bash
run: npm run test
```
To view reports: 
```bash
npm run report
```
login - 
```bash
npx playwright test login.spec.ts
```
Add .env in local run 
```bash
USER_NAME=
USER_PASSWORD=
```

## Manual Workflow Trigger: 

The GitHub Actions workflow supports manual triggering with test type selection:

    -all  
    -login
    -userTable
    -mockingApi


## GitHub Actions CI/CD
The project includes automated GitHub Actions workflow for continuous integration. The workflow:

Automatic Triggers:

Runs on every push to main branch

Runs on pull requests to main branch

Executes tests on Ubuntu, Windows, and macOS

Manual Trigger with Options:


## Folder Structure
-Here is an high level overview of the project directory structure:
```bash
metaz_digital_Assignment/
│
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD pipeline
│
├── src/
│   ├── locators/                   # All locators
│   │   ├── common.locators.ts
│   │   ├── login.locators.ts
│   │   ├── userTable.locators.ts
│   │   └── index.ts               # Barrel export
│   │
│   ├── methods/                    # All methods
│   │   ├── common.methods.ts
│   │   ├── login.methods.ts
│   │   ├── userTable.methods.ts
│   │   ├── mockHandlers.ts        # API mocking methods
│   │   └── index.ts
│   │
│   ├── data/                      # All test data
│   │   ├── login.data.ts
│   │   ├── mockUsers.data.ts
│   │   ├── userTestData.data.ts
│   │   └── index.ts
│   │
│   └── types/                     # TypeScript types
│       └── index.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── mockingApi.spec.ts
│   ├── userTable.spec.ts
│   └── api/                       # Future API tests
│
├── test-results/                  # Playwright test results
├── playwright-html-report/        # HTML reports
├── screenshots/                   # Test screenshots
│   └── login_success.png
│
├── env/                           # Environment files
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
