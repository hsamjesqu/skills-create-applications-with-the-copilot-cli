/**
 * calculator.test.js
 *
 * Unit tests for calculator.js covering the four basic arithmetic
 * operations: addition, subtraction, multiplication, and division.
 *
 * Run with: node --test src/calculator.test.js
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const { add, subtract, multiply, divide, calculate } = require('./calculator');

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

test('calculate: supports symbol operators (+, -, *, /)', () => {
  assert.equal(calculate(2, '+', 3), 5);
  assert.equal(calculate(5, '-', 3), 2);
  assert.equal(calculate(4, '*', 6), 24);
  assert.equal(calculate(10, '/', 2), 5);
});

test('calculate: supports word operators (add, subtract, multiply, divide)', () => {
  assert.equal(calculate(2, 'add', 3), 5);
  assert.equal(calculate(5, 'subtract', 3), 2);
  assert.equal(calculate(4, 'multiply', 6), 24);
  assert.equal(calculate(10, 'divide', 2), 5);
});

test('calculate: throws on unsupported operator', () => {
  assert.throws(() => calculate(1, '%', 2), /Unsupported operator/);
});
