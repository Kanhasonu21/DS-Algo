//permutation

var permute = function (nums) {
  let ans = [];
  helperFunction(0);
  return ans;
  function helperFunction(index) {
    if (index === nums.length) {
      ans.push(nums.slice());
      return;
    }
    for (let i = index; i < nums.length; i++) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      helperFunction(index + 1);
      [nums[index], nums[i]] = [nums[i], nums[index]];
    }
  }
};
console.log(permute([1, 2, 3]));
