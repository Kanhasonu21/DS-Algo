//print name n times

function printName(intial, total) {
  if (intial > total) return;
  console.log('Some name');
  printName(intial + 1, total);
}
// printName(1, 5);

//print linearly 1 - to n
let count = 1;
function LinearNumber(input) {
  if (input == 0) return;
  console.log(count);
  count++;
  LinearNumber(input - 1);
}
// LinearNumber(10);

//print in reverse

function printInReverse(i, n) {
  if (i > n) return;
  console.log(n);
  printInReverse(i, n - 1);
}
// printInReverse(0, 10);

//print 1 to n in bactracking

function printNameBacktracking(i) {
  if (i < 1) return;
  printNameBacktracking(i - 1);
  console.log(i);
}
// printNameBacktracking(3);

//print n to 1 backtracking
function printReverseBacktracking(i, n) {
  if (i > n) return;
  printReverseBacktracking(i + 1, n);
  console.log(i);
}
// printReverseBacktracking(1, 4);

//sum upto n numbers

function SumUptoN(number) {
  if (number === 0) {
    return 0;
  }
  return number + SumUptoN(number - 1);
}
// const data = SumUptoN(3);
// console.log(data);

//factorail

function factorial(number) {
  if (number === 1) {
    return number;
  }
  return number * factorial(number - 1);
}
const facto = factorial(4);
// console.log(facto);

//reverse array with recursion

function reverseArray(l, r) {
  if (l >= r) return;
  [arr[r], arr[l]] = [arr[l], arr[r]];
  reverseArray(l + 1, r - 1);
}
let arr = [1, 2, 3, 4, 5, 6];
reverseArray(0, arr.length - 1);
console.log(arr);

//more efficient way

function reverseArrayOpt(l, n) {
  if (l > Math.floor(n / 2)) return;
  [newArray[l], newArray[n]] = [newArray[n], newArray[l]];
  reverseArrayOpt(l + 1, n - l - 1);
}
let newArray = [1, 2, 3, 4, 5, 6];
const lenghtOfArray = newArray.length - 1;
reverseArrayOpt(0, lenghtOfArray);
console.log('89=>', newArray);
