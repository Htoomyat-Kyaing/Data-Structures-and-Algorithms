const cartesian = (arr1, arr2) => {
  let result = [];
  for (a of arr1) {
    for (b of arr2) {
      let temp = [a, b];
      result.push(temp);
    }
  }
  console.log(result);
};

// Big O - O(m*n) n^2 if two arrays are the same length
cartesian([1, 2], [2, 3, 4]);
