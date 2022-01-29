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
  printReverseBacktracking(i+1, n);
  console.log(i);
}
printReverseBacktracking(1, 4);
