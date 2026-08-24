#!/usr/bin/env node

/**
 * calculator.js
 *
 * A simple Node.js CLI calculator supporting the four basic arithmetic
 * operations:
 *   - Addition       (+ or add)
 *   - Subtraction    (- or subtract)
 *   - Multiplication (* or multiply)
 *   - Division       (/ or divide)
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *
 * Examples:
 *   node calculator.js 5 + 3
 *   node calculator.js 10 divide 2
 */

// Adds two numbers together.
function add(a, b) {
  return a + b;
}

// Subtracts the second number from the first.
function subtract(a, b) {
  return a - b;
}

// Multiplies two numbers together.
function multiply(a, b) {
  return a * b;
}

// Divides the first number by the second. Throws an error on division by zero.
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

// Maps supported operator symbols/words to their corresponding functions.
const operations = {
  '+': add,
  add: add,
  '-': subtract,
  subtract: subtract,
  '*': multiply,
  multiply: multiply,
  '/': divide,
  divide: divide,
};

// Performs the calculation for the given operands and operator.
function calculate(num1, operator, num2) {
  const operation = operations[operator];
  if (!operation) {
    throw new Error(
      `Unsupported operator "${operator}". Supported operators: + - * / (or add, subtract, multiply, divide).`
    );
  }
  return operation(num1, num2);
}

// Entry point for CLI usage: reads arguments, validates them, and prints the result.
function main() {
  const [arg1, operator, arg2] = process.argv.slice(2);

  if (arg1 === undefined || operator === undefined || arg2 === undefined) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Example: node calculator.js 5 + 3');
    process.exitCode = 1;
    return;
  }

  const num1 = Number(arg1);
  const num2 = Number(arg2);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.error('Both operands must be valid numbers.');
    process.exitCode = 1;
    return;
  }

  try {
    const result = calculate(num1, operator, num2);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

// Only run the CLI logic when this file is executed directly (not imported).
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, calculate };
