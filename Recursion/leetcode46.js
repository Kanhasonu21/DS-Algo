//permutation

var permute = function (nums) {
  let ans = [];
  let temp = [];
  let checkArray = new Array(nums.length).fill(false);
  helperFunction();
  return ans;
  function helperFunction() {
    if (temp.length === nums.length) {
      ans.push(temp.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      console.log(i, '->', temp);

      if (!checkArray[i]) {
        temp.push(nums[i]);
        checkArray[i] = true;
        helperFunction();
        temp.pop();
        checkArray[i] = false;
      }
    }
  }
};
// console.log(permute([1, 2, 3])
permute([1, 2, 3]);
