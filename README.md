PLAYWRIGHT AUTOMATION TESTING PROJECT
Institute: SLIIT
Student ID: IT23156210


PROJECT OVERVIEW
----------------
This project uses Playwright to conduct automated end-to-end testing on a Sinhala Transliteration web application. The goal is to verify that Singlish text is accurately converted into Sinhala characters and to make sure the user interface functions correctly. The project follows SLIIT testing guidelines and demonstrates how automated UI and functional tests are used in practice.


PROJECT OBJECTIVES
------------------
- Validate correct Sinhala transliteration for valid Singlish input
- Identify system behavior for invalid or unsupported input
- Verify UI responsiveness and real-time output updates
- Test edge cases such as emojis, long inputs, and multiline text
- Apply Playwright best practices in test automation


TECHNOLOGIES USED
-----------------
- Playwright Test Framework
- TypeScript
- Node.js
- Chromium  browser
- Visual Studio Code
- Git and GitHub


APPLICATION UNDER TEST
----------------------
Website: https://www.swifttranslator.com/

Feature Tested:
- Singlish to Sinhala Transliteration
- Real-time output rendering
- UI input and output behavior


PROJECT FOLDER STRUCTURE
------------------------
IT23156210_Playwright_Project/

|-- tests/
|   |-- IT23156210 - IT3040_TestCases.xlsx
|   |-- IT23156210 - transliteration.spec.ts
|   |-- IT23156210-example.spec.ts
|   |-- IT23156210-generate_excel.js
|   |-- IT23156210-generate_excel.js
|
|
|-- GitRepositoryLink.txt
|-- package-lock.json
|-- package.json
|-- playwright.config.ts
|-- README.txt

TEST CASE COVERAGE
------------------
The automation suite includes 37 test cases categorized as:

- Positive Functional Test Cases
- Negative Functional Test Cases
- Positive UI Test Cases
- Negative UI Test Cases
- Edge Case Test Scenarios

Each test case includes an ID, Test case name,Input length type, input data, expected output, actual
output, and execution status,Accuracy justification / Description,What is covered by the test.



TEST IMPLEMENTATION DETAILS
---------------------------
- Tests are written using Playwright Test with TypeScript
- A data-driven approach is used by storing all test cases in an array
- Tests are dynamically generated using a loop
- Input is typed in chunks to simulate real user behavior
- Composition and input events are manually triggered to support IME-based
  transliteration processing
- Assertions validate that the output contains the expected Sinhala text


INSTALLATION AND SETUP
----------------------
Prerequisites:
- Node.js (LTS version)
- Git
- Visual Studio Code


Step 1: Open the project folder in your terminal or IDE

Step 2: Install dependencies
npm install

Step 3: Run Playwright tests
npx playwright test



RUNNING THE TESTS
-----------------
Run all tests:
npx playwright test


TEST REPORTING
--------------
After execution, Playwright generates an HTML report.

To view the report:
npx playwright show-report

The report includes:
- Test execution summary
- Passed and failed test cases
- Execution time
- Screenshots for failed tests
- Error logs


BEST PRACTICES FOLLOWED
----------------------
- Web-first assertions using expect()
- No hard-coded waits
- Auto-wait handling
- Data-driven test design
- Clear test case naming with unique IDs
- Cross-browser compatible selectors
- Edge case validation


NOTES FOR EVALUATORS
-------------------
- The GitHub repository is publicly accessible
- All tests can be executed using the provided instructions
- No additional configuration is required
- Test cases are documented using the SLIIT Excel template (Appendix 2)
- The project follows SLIIT academic integrity policies
- All code and documentation are original and plagiarism-free


REFERENCES
----------
Playwright Documentation: https://playwright.dev
Playwright API Reference: https://playwright.dev/docs/api/class-playwright

