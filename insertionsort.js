const insertionsort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      console.log("before : " + arr[j + 1]);
      arr[j + 1] = arr[j];
      j--;
      console.log("i = " + i);
      console.log("j = " + j);
      console.log("after : " + arr[j + 1]);
    }
    // at this stage j = -1
    arr[j + 1] = numberToInsert;
    console.log("Index : " + (j + 1));
    console.log("arr[j+1] = " + arr[j + 1]);
  }
};

const arr = [19, 29, -3, 0, 6];
insertionsort(arr);
console.log(arr);

// BIG O - O(n^2)
