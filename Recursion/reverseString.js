var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;

  if (n % 2 != 0) {
    return false;
  } else {
    return isPowerOfTwo(Math.floor(n / 2));
  }
};
console.log(isPowerOfTwo(4));
