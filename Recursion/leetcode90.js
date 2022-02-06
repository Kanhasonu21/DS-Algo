var subsetsWithDup = function (nums) {
  let ans = [];
  let temp = [];
  nums.sort((a, b) => a - b);
  helper(0);
  return ans;
  function helper(index) {
    ans.push([...temp]);
    for (let i = index; i < nums.length; i++) {
      if (i != index && arr[i] === arr[i - 1]) continue;
      temp.push(nums[i]);
      helper(i + 1);
      temp.pop();
    }
  }
};
let arr = [1, 2, 2];
console.log(subsetsWithDup(arr));
