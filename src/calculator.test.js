/**
 * calculator.test.js
 *
 * Unit tests for calculator.js covering arithmetic operations and
 * related error handling.
 *
 * Run with: node --test src/calculator.test.js
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate,
} = require('./calculator');

test('add: adds two positive numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('add: handles negative numbers', () => {
  assert.equal(add(-2, -3), -5);
});

test('subtract: subtracts the second number from the first', () => {
  assert.equal(subtract(5, 3), 2);
});

test('subtract: handles negative results', () => {
  assert.equal(subtract(3, 5), -2);
});

test('multiply: multiplies two positive numbers', () => {
  assert.equal(multiply(4, 6), 24);
});

test('multiply: handles multiplication by zero', () => {
  assert.equal(multiply(5, 0), 0);
});

test('divide: divides two numbers evenly', () => {
  assert.equal(divide(10, 2), 5);
});

test('divide: throws an error when dividing by zero', () => {
  assert.throws(() => divide(10, 0), /Division by zero is not allowed\./);
});

test('modulo: returns the remainder of two positive numbers', () => {
  assert.equal(modulo(10, 3), 1);
});

test('modulo: handles negative numbers', () => {
  assert.equal(modulo(-5, 2), -1);
});

test('modulo: throws an error when modulo by zero', () => {
  assert.throws(() => modulo(10, 0), /Modulo by zero is not allowed\./);
});

test('power: raises a number to a positive exponent', () => {
  assert.equal(power(2, 3), 8);
});

test('power: handles an exponent of zero', () => {
  assert.equal(power(5, 0), 1);
});

test('power: handles negative exponents', () => {
  assert.equal(power(2, -1), 0.5);
});

test('squareRoot: returns the square root of a positive number', () => {
  assert.equal(squareRoot(16), 4);
});

test('squareRoot: returns 0 for the square root of 0', () => {
  assert.equal(squareRoot(0), 0);
});

test('squareRoot: throws an error for negative numbers', () => {
  assert.throws(
    () => squareRoot(-16),
    /Cannot calculate the square root of a negative number\./
  );
});

test('calculate: supports symbol operators (+, -, *, /, %, **, ^)', () => {
  assert.equal(calculate(2, '+', 3), 5);
  assert.equal(calculate(5, '-', 3), 2);
  assert.equal(calculate(4, '*', 6), 24);
  assert.equal(calculate(10, '/', 2), 5);
  assert.equal(calculate(10, '%', 3), 1);
  assert.equal(calculate(2, '**', 3), 8);
  assert.equal(calculate(2, '^', 3), 8);
});

test('calculate: supports word operators (add, subtract, multiply, divide, mod, modulo, pow, power)', () => {
  assert.equal(calculate(2, 'add', 3), 5);
  assert.equal(calculate(5, 'subtract', 3), 2);
  assert.equal(calculate(4, 'multiply', 6), 24);
  assert.equal(calculate(10, 'divide', 2), 5);
  assert.equal(calculate(10, 'mod', 3), 1);
  assert.equal(calculate(10, 'modulo', 3), 1);
  assert.equal(calculate(2, 'pow', 3), 8);
  assert.equal(calculate(2, 'power', 3), 8);
});

test('calculate: supports square root operators', () => {
  assert.equal(calculate(9, 'sqrt'), 3);
  assert.equal(calculate(16, 'sqrt', 0), 4);
  assert.equal(calculate(25, 'square-root'), 5);
  assert.equal(calculate(9, '√'), 3);
});

test('calculate: throws on unsupported operator', () => {
  assert.throws(() => calculate(1, '#', 2), /Unsupported operator/);
});
