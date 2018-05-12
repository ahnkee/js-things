'use strict';

const test = require('ava');
const fibonacci = require('./tailOptimized');

test('output 0 when n is 0', ({is}) => {
  const result = fibonacci(0);
  const expected = 0;

  is(result, expected);
});

test('output 1 when n is 1', ({is}) => {
  const result = fibonacci(1);
  const expected = 1;

  is(result, expected);
});

test('output 1 when n is 2', ({is}) => {
  const result = fibonacci(2);
  const expected = 1;

  is(result, expected);
});

test('output 2 when n is 3', ({is}) => {
  const result = fibonacci(3);
  const expected = 2;

  is(result, expected);
});

test('output 3 when n is 4', ({is}) => {
  const result = fibonacci(4);
  const expected = 3;

  is(result, expected);
});

test('output 5 when n is 5', ({is}) => {
  const result = fibonacci(5);
  const expected = 5;

  is(result, expected);
});

test('output 8 when n is 6', ({is}) => {
  const result = fibonacci(6);
  const expected = 8;

  is(result, expected);
});

test('output 13 when n is 7', ({is}) => {
  const result = fibonacci(7);
  const expected = 13;

  is(result, expected);
});

test('output 21 when n is 8', ({is}) => {
  const result = fibonacci(8);
  const expected = 21;

  is(result, expected);
});

test('output 34 when n is 9', ({is}) => {
  const result = fibonacci(9);
  const expected = 34;

  is(result, expected);
});

test('output 55 when n is 10', ({is}) => {
  const result = fibonacci(10);
  const expected = 55;

  is(result, expected);
});
