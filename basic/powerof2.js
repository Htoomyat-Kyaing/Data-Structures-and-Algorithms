const powerof2 = (n) => {
  if (n === 0 || (n > 2 && n % 2 !== 0)) return false;
  if (n <= 2) return true;
  return Math.log2(n) % 2 === 0 ? true : false;
};

/*
Binary
4 = 100
3 = 011
4 - 3 = 000
*/
const isPowerOfTwoBitWise = (n) => {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
};

console.log(powerof2(16));
console.log(isPowerOfTwoBitWise(1));
