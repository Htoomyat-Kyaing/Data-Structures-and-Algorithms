const factorial = (n) => {
  let result = 1;
  if (n <= 1) return result;
  // for (let i = 2; i <= n; i++) {
  //   result *= i;
  // }
  // return result;
  return n * factorial(n - 1);
};

console.log(factorial(5));
