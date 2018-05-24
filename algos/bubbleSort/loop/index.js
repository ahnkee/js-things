const swap = require('../../swap');

const bubbleSort = arr => {
  if (arr.length <= 1) return arr;

  const copy = arr.slice();

  for (let i = 1; i < copy.length; i++) {
    for (let j = 1; j < copy.length; j++) {
      if (copy[j] < copy[j-1]) {
        swap(j, j-1, copy);
      }
    }
  }

  return copy;
};
