'use strict';

const test = require('ava');
const fibonacciGenerator = require('./');

test('generate first number in sequence', ({deepEqual}) => {
  const expected = [0];
  const [...result] = fibonacciGenerator(1);
  deepEqual(result, expected);
});

test('generate first 3 in sequence', ({deepEqual}) => {
  const expected = [0, 1, 1];
  const [...first3] = fibonacciGenerator(3);
  deepEqual(first3, expected);
});

test('generate first 5 in sequence', ({deepEqual}) => {
  const expected = [0, 1, 1, 2, 3];
  const [...first5] = fibonacciGenerator(5);
  deepEqual(first5, expected);
});


test('generate first 10 in sequence', ({deepEqual}) => {
  const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
  const [...first10] = fibonacciGenerator(10);
  deepEqual(first10, expected);
});
