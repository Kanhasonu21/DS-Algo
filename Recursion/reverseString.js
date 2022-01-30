function reverseFunction(l, r) {
  if (l > Math.floor(r / 2)) return true;
  if (string[l] !== string[r]) {
    return false;
  }
  return reverseFunction(l + 1, r - 1);
}
let string = 'MADAM';
console.log(reverseFunction(0, string.length - 1));
