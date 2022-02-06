//leetcode que 40

var combinationSum2 = function (candidates, target) {
  let ans = [];
  let temp = [];
  candidates.sort((a, b) => a - b);
  getCombination(0, target);
  return ans;
  function getCombination(index, target) {
    if (target === 0) {
      ans.push(temp.slice());
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      if (candidates[i] > target) break;
      temp.push(candidates[i]);
      getCombination(i + 1, target - candidates[i]);
      temp.pop();
    }
  }
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
