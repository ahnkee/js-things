'use strict';

module.exports = function* fibonacci(n, current = 0, next = 1) {
  if (n === 0) return 0;

  yield current;
  yield *fibonacci(--n, next, current + next);
}
