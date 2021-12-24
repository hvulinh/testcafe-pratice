# Test Cafe Pratice

This is my first practice using Test Cafe.  
Note: This pratice was done on Windows and have not tested on other platforms/OSes.

## Requirements

- Node.js (v16.13.1)
- npm (v8.1.2) (included when installing Node.js)
- TestCafe (v1.17.1)
- .NET 4.0 or newer (for screenshot functionality)
- Git (v2.34.1)
- Chrome, Firefox

## Installation

1. Install Node.js, npm will be included together: https://nodejs.org/en/
2. Install Test Cafe: https://testcafe.io/documentation/402635/getting-started#installing-testcafe
3. Install .NET 4.0 or newer: https://dotnet.microsoft.com/en-us/download
4. Install Git: https://git-scm.com/downloads
5. Install either Chrome or Firefox, referably both as default config uses both.

## How to run tests

### Check out source code

1. Clone the repository: `git clone https://github.com/hvulinh/testcafe-pratice.git`
2. Navigate to root folder: `cd testcafe-practice`

### Run commands

The simple command to run test with Test Cafe has the following format: `testcafe \<browser\> \<path-to-tests\>`.  
So to run test with Chrome/Firefox, use:
- `testcafe chrome tests` or
- `testcafe firefox tests` or
- `testcafe chrome, firefox tests` (this will trigger both browsers at the same time)  

Browser options/arguments can also be added to run command, for example:
- Chrome: `testcafe "chrome:headless '--window-size=1920,1080'"`
- Firefox: `testcafe "firefox:headless '-width 1920' '-height 1080'"`

Test Cafe also supports configuration file (.testcaferc.json) in which options like \<browser\> and \<path-to-tests\> can be set up before-hand.  
In that case, run command can be as simple as: `testcafe`.  

*Note: By default, I have set up in .testcaferc.json so that this tests will run using both Chrome and Firefox at the same time in headless mode so make sure you have both browsers installed or else it may fail. If that is not what you want than you can use the command noted above, it will overwrite the one in configuration file.*

### Run tests concurrently

Test Cafe already has support for this. It can be set up in configuration file or added as option in run command.  
Details:
- https://testcafe.io/documentation/402963/guides/advanced-guides/speed-up-test-execution#run-tests-concurrently

*Note: By default, I set this to 1 (no concurency) in .testcaferc.json.*

## Project structure

> root  
  |- tests               // contains test suites, test cases  
  |- page_model          // contains locators, actions for pages  
  |- data                // contains test data  
  |- helpers             // contains helpers/utilities  
  |- reports             // contains reports after running tests  
  |- screenshots         // contains screenshots after running tests  
  |- resources           // contains other resources, scripts,...  
  |- .testcaferc.json    // configuration file for Test Cafe  
  |- README.md           // overview of this project  

## CI/CD Solution

For this, I'm using Jenkins and have set up a simple job to run this locally.  
Inside folder "resources", you can find a jenkinsfile that include a simple pipeline for this job. When triggered, my Jenkins job will pull the source code from Git repo, get the jenkinsfile and perform the steps described inside.
