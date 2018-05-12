'use strict';

module.exports = function fibonacci(n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n === 1) return 1;
  if (n <= 0) return 0;

  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
};
