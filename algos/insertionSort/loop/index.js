const swap = require('../../swap');

const sort = arr => {
  if (arr.length <= 1) return arr;

  const sorted = arr.slice();

  let i = 1;

  while (i < sorted.length) {
    let j = i;

    while (j > 0 && sorted[j-1] > sorted[j]) {
      swap(j-1, j, sorted);
      j -= 1;
    }

    i += 1;
  }

  return sorted;
};
