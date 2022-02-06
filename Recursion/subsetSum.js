// GFG Subset question
// https://practice.geeksforgeeks.org/problems/subset-sums2234/1 

let arr = [3, 1, 2];
subsetSums(arr, 3);

function subsetSums(arr, n) {
  let temp = [];
  let sum = 0;
  helper(0, sum);
  console.log(temp);

  function helper(index, sum) {
    if (index === n) {
      temp.push(sum);
      return;
    }
    helper(index + 1, arr[index] + sum);
    helper(index + 1, sum);
  }
}
