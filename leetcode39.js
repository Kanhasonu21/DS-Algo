// 39. Combination Sum
function combinationSum(candidates, target) {
  let result = [];
  let temp = [];
  recursionCombination(0, candidates, target);
  return result;

  function recursionCombination(index, data, target) {
    if (target === 0) {
      return result.push(temp.slice());
    }
    if (index === data.length) {
      return;
    }
    if (target < 0) return;
    //pick part

    temp.push(data[index]);
    recursionCombination(index, data, target - data[index]);
    temp.pop();
    //not pick
    recursionCombination(index + 1, data, target);
  }
}

console.log(combinationSum([2, 3, 6, 7], 7));
