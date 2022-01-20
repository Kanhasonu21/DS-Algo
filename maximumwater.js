
//leetcode 11
var maxArea = function (height) {
  let leftPos = 0;
  let rightPos = height.length - 1;
  let area = 0;
  while (leftPos < rightPos) {
    let leftValue = height[leftPos];
    let rightValue = height[rightPos];
    let curreantArea = (rightPos-leftPos)*Math.min(rightValue,leftValue)
    area= Math.max(curreantArea,area)
    if (leftValue < rightValue) {
      leftPos += 1;
    } else {
      rightPos -=1;
    }
  }
  return area;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
