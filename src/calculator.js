#!/usr/bin/env node

/**
 * calculator.js
 *
 * A simple Node.js CLI calculator supporting arithmetic operations:
 *   - Addition       (+ or add)
 *   - Subtraction    (- or subtract)
 *   - Multiplication (* or multiply)
 *   - Division       (/ or divide)
 *   - Modulo         (% or modulo)
 *   - Exponentiation (**, ^, or power)
 *   - Square root    (sqrt or √)
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *   node calculator.js sqrt <number>
 *
 * Examples:
 *   node calculator.js 5 + 3
 *   node calculator.js 10 divide 2
 *   node calculator.js 10 % 3
 *   node calculator.js 2 ** 3
 *   node calculator.js sqrt 9
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

// Returns the remainder after dividing the first number by the second.
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }
  return a % b;
}

// Raises the first number to the power of the second number.
function power(a, b) {
  return a ** b;
}

// Returns the square root of a number. Throws an error on negative inputs.
function squareRoot(value) {
  if (value < 0) {
    throw new Error('Square root of a negative number is not allowed.');
  }
  return Math.sqrt(value);
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
  '%': modulo,
  modulo: modulo,
  '**': power,
  '^': power,
  power: power,
  sqrt: squareRoot,
  '√': squareRoot,
};

// Performs the calculation for the given operands and operator.
function calculate(num1, operator, num2) {
  const operation = operations[operator];
  if (!operation) {
    throw new Error(
      `Unsupported operator "${operator}". Supported operators: + - * / % ** ^ sqrt √ (or add, subtract, multiply, divide, modulo, power).`
    );
  }

  if (operator === 'sqrt' || operator === '√') {
    return operation(num1);
  }

  return operation(num1, num2);
}

// Entry point for CLI usage: reads arguments, validates them, and prints the result.
function main() {
  const args = process.argv.slice(2);

  if (args.length === 2 && (args[0] === 'sqrt' || args[0] === '√')) {
    const num = Number(args[1]);

    if (Number.isNaN(num)) {
      console.error('The square root operand must be a valid number.');
      process.exitCode = 1;
      return;
    }

    try {
      console.log(calculate(num, args[0]));
    } catch (error) {
      console.error(error.message);
      process.exitCode = 1;
    }
    return;
  }

  if (args.length !== 3) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Example: node calculator.js 5 + 3');
    console.error('Square root: node calculator.js sqrt <number>');
    process.exitCode = 1;
    return;
  }

  const [arg1, operator, arg2] = args;
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };
