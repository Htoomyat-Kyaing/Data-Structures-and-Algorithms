const arr = [1, 2, 3, "test"];
arr.push(4); // pop to remove
arr.unshift(0); //shift to remove
for (const item of arr) {
  console.log(item);
}

// map,filter,reduce,concat,slice,splice
console.log(arr.map((i) => i + 1));
console.log(arr.filter((i) => i === 2));
arr.splice(4, 1);
console.log(arr);
console.log(arr.slice(3));
const newArr = [5, 6, 7];

console.log(arr.concat(newArr));
console.log(arr.reduce((a, v) => a + v, 0)); //accumulator,currentValue,initialValue

// Big O
/*
insert/remove = O(1)
insert/remove from beginning = O(n)
access = O(1)
search = O(n)
push/pop = O(1)
shift/unshift/concat/slice/splice = O(n)
forEach/map/filter/reduce = O(n)
*/
