const bubblesort = (arr) => {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  console.log(arr);
};

bubblesort([-5, -7, 7, 2, 10, 0]);

// BIG O - O(n^2)
