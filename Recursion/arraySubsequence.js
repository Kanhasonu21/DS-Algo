// let arr = [3, 1, 2];
// let size = arr.length;
// let temp = [];
// function subsequnce(ind, temp, size) {
//   if (ind >= size) {
//     console.log(temp);
//     return;
//   }
//   //take
//   temp.push(arr[ind]);
//   subsequnce(ind + 1, temp, size);
//   temp.pop();
//   //not take
//   subsequnce(ind + 1, temp, size);
// }
// subsequnce(0, [], size);

//sum matching subsequence

let arr = [1, 1, 2];
let size = arr.length;
let temp = [];
let sum = 2;
function subsequnce(ind, temp, currentSum) {
  if (ind >= size) {
    if (currentSum === sum) {
      console.log(temp);
      return 1;
    }
    // console.log(temp);
    return 0;
  }
  //take
  currentSum += arr[ind];
  temp.push(arr[ind]);
  let left = subsequnce(ind + 1, temp, currentSum);
  currentSum -= temp.pop();
  //not take
  let right = subsequnce(ind + 1, temp, currentSum);
  return left + right;
}
console.log(subsequnce(0, [], 0))
