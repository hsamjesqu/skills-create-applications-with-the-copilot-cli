#!/usr/bin/env node

/**
 * calculator.js
 *
 * A simple Node.js CLI calculator supporting the four basic arithmetic
 * operations plus modulo, exponentiation, and square root:
 *   - Addition       (+ or add)
 *   - Subtraction    (- or subtract)
 *   - Multiplication (* or multiply)
 *   - Division       (/ or divide)
 *   - Modulo         (% or mod)
 *   - Exponentiation (^ or pow)
 *   - Square root    (sqrt) - unary operation, second operand is ignored
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *
 * Examples:
 *   node calculator.js 5 + 3
 *   node calculator.js 10 divide 2
 *   node calculator.js 5 % 2
 *   node calculator.js 2 ^ 3
 *   node calculator.js 16 sqrt 0
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

// Returns the remainder of dividing the first number by the second. Throws
// an error on modulo by zero.
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }
  return a % b;
}

// Raises the first number to the power of the second number.
function power(a, b) {
  return Math.pow(a, b);
}

// Returns the square root of the first number. The second operand is
// ignored since square root is a unary operation. Throws an error for
// negative numbers since the result would be imaginary.
function squareRoot(a) {
  if (a < 0) {
    throw new Error('Cannot calculate the square root of a negative number.');
  }
  return Math.sqrt(a);
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
  mod: modulo,
  modulo: modulo,
  '^': power,
  pow: power,
  power: power,
  sqrt: squareRoot,
  'square-root': squareRoot,
};

// Performs the calculation for the given operands and operator.
function calculate(num1, operator, num2) {
  const operation = operations[operator];
  if (!operation) {
    throw new Error(
      `Unsupported operator "${operator}". Supported operators: + - * / % ^ sqrt (or add, subtract, multiply, divide, modulo, power, sqrt).`
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };
