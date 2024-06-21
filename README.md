# Calculator Next.js Project

This project is a simple String Calculator built with Next.js and TypeScript. It demonstrates Test-Driven Development (TDD) approach and allows users to input strings of numbers to calculate their sum based on specific rules.

## Features

- Handles empty strings and returns 0.
- Returns the sum of single numbers.
- Returns the sum of multiple numbers separated by commas.
- Handles new lines as delimiters between numbers.
- Supports custom delimiters defined in the format `//[delimiter]\n[numbers…]`.

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/srishtidhiman/calculator-nextjs.git
cd calculator-nextjs
```

```bash
npm install
npm run dev
```
## Usage
Enter your input string in the textarea provided.

#### Examples:
* ` "" returns 0`
* `"1" returns 1`
* `"1,5" returns 6`
* `"1\n2,3" returns 6`
* `"//;\n1;2" returns 3`

 Click the "Calculate" button to get the result.

## Project Structure
* `pages/index.tsx`: Main React component handling user input and displaying results.
* `utils/StringCalculator.ts`: Implementation of the String Calculator logic.
* `tests/StringCalculator.test.ts`: Unit tests for the String Calculator.

## TDD Approach

This project follows Test-Driven Development (TDD) principles:

1. **Write a test for a new feature:**
   - Begin by writing a test that defines the expected behavior of the new feature or improvement.

2. **Run the test and see it fail:**
   - Execute the test to ensure it fails. This step confirms that the test accurately identifies the missing functionality.

3. **Write the minimum code to pass the test:**
   - Implement the necessary code to fulfill the requirements specified by the failing test.

4. **Refactor the code while ensuring the tests still pass:**
   - Improve the code without changing its behavior. Ensure all existing tests continue to pass after refactoring.

5. **Repeat for each new feature or improvement:**
   - Cycle through the above steps for every new feature, enhancement, or bug fix. Each iteration should start with a failing test.

## Testing

To run tests:

1. **Open a terminal:**
   - Navigate to the project directory.

2. **Execute the following command:**
```bash
npm run test
```
3. **See test results in the terminal.**