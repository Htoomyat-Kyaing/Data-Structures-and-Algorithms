// this doesn't work with duplicates
const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    if (arr[i] > pivot) right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([1, 2, -1, 0, 4]));

// Big O - O(n^2)
