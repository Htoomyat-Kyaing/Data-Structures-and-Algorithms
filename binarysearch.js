const binarySearch = (n, arr) => {
  let arrLength = arr.length;
  // if (arrLength === 0) return -1;

  let leftPointer = 0;
  let rightPointer = arrLength - 1;
  while (leftPointer <= rightPointer) {
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    // console.log(leftPointer, rightPointer, middlePointer);
    if (arr[middlePointer] === n) {
      return middlePointer;
    }
    if (arr[middlePointer] > n) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }
  }
  return -1;
};

console.log(binarySearch(-5, [-5, 2, 4, 6, 10]));
console.log(binarySearch(2, [-5, 2, 4, 6, 10]));
console.log(binarySearch(20, [-5, 2, 10, 4, 6]));

// Big O - O(log n)
