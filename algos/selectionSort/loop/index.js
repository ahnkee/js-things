const swap = require('../../swap');

const selectionSort = arr => {
  if (arr.length <= 1) return arr;

  let i = 0;

  while (i < arr.length) {
    let j = i;
    let minIdx = i;

    while (j < arr.length) {
      minIdx = (arr[j] < arr[minIdx]) ? j : minIdx;
      j += 1;
    }

    if (minIdx !== i) {
      swap(i, minIdx, arr);
    }

    i += 1;
  }

  return arr;
};
