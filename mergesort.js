function sortArray(num1, num2) {
  let ans = [];
  let [onep, twop] = [0, 0];
  let index = 0;
  while (onep < num1.length && twop < num2.length) {
    if (num1[onep] < num2[twop]) {
      ans[index++] = num1[onep++];
    } else {
      ans[index++] = num2[twop++];
    }
  }
  console.log(onep, twop);
  while (onep < num1.length) {
    ans[index++] = num1[onep];
  }
  while (twop < num2.length) {
    ans[index++] = num2[twop++];
  }
  return ans;
}
console.log(sortArray([1, 2, 3, 4], [2, 4, 6, 8]));
