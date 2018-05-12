'use strict';

module.exports = (num) => {
  let current = 0;
  let next = 1;

  while (num > 0) {
    [current, next] = [next, current + next];
    num--;
  }

  return current;
};

