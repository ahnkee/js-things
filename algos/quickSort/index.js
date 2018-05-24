const quickSort = (arr, left, right) => {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }

  return arr;
}

function partition (arr, left, right) {
  const pivotVal = arr[right];
  let partitionIdx = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, partitionIdx);
      partitionIdx++;
    }
  }

  swap(arr, right, partitionIdx);

  return partitionIdx;
};
