// GFG Subset question
// https://practice.geeksforgeeks.org/problems/subset-sums2234/1

let arr = [1, 2, 3];

function subsetSums(arr) {
  let ans = [];
  let tempArray = [];
  let sum = 0;
  helper(0, sum);
  console.log(ans);

  function helper(index) {
    if (index === arr.length) {
      ans.push(tempArray.slice());
      return;
    }
    tempArray.push(arr[index]);
    helper(index + 1);
    tempArray.pop();
    helper(index + 1);
  }
}
subsetSums(arr);
