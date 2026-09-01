const test = require('node:test');
const assert = require('node:assert/strict');

const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

test('addition', () => {
  assert.equal(addition(2, 3), 5);
});

test('subtraction', () => {
  assert.equal(subtraction(5, 3), 2);
});

test('multiplication', () => {
  assert.equal(multiplication(4, 3), 12);
});

test('division', () => {
  assert.equal(division(8, 2), 4);
});

test('division by zero', () => {
  assert.throws(() => division(8, 0), /Cannot divide by zero/);
});

test('modulo', () => {
  assert.equal(modulo(10, 3), 1);
});

test('modulo by zero', () => {
  assert.throws(() => modulo(10, 0), /Cannot divide by zero/);
});

test('power', () => {
  assert.equal(power(2, 8), 256);
});

test('square root', () => {
  assert.equal(squareRoot(16), 4);
});

test('square root of negative number', () => {
  assert.throws(() => squareRoot(-1), /Cannot take square root of a negative number/);
});
