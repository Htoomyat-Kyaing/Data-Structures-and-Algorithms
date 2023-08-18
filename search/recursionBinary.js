const recursionBinary = (n, arr) => {
  let arrLength = arr.length;
  let leftIndex = 0;
  let rightIndex = arrLength - 1;

  return search(n, arr, leftIndex, rightIndex);
};

const search = (n, arr, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) return -1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (n === arr[middleIndex]) return middleIndex;

  if (n > arr[middleIndex]) {
    return search(n, arr, middleIndex + 1, rightIndex);
  } else {
    return search(n, arr, leftIndex, middleIndex - 1);
  }
};

console.log(recursionBinary(-5, [-5, 2, 4, 6, 10]));
console.log(recursionBinary(2, [-5, 2, 4, 6, 10]));
console.log(recursionBinary(20, [-5, 2, 10, 4, 6]));

// Big O - O(log n)
