const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const middleIdx = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIdx);
  const right = arr.slice(middleIdx);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  const temp = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      temp.push(left[leftIdx]);
      leftIdx++;
    } else {
      temp.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return [
    ...temp,
    ...left.slice(leftIdx),
    ...right.slice(rightIdx),
  ];
}
