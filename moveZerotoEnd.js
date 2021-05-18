let arr = [5, 6, 0, 0, 0, 7, 0, 1, 2, 0];
function swap(ele1, ele2) {
  let temp;
  (temp = ele1), (ele1 = ele2), (ele2 = temp);
  return ele1, ele2;
}
const moveZero = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[res]] = [arr[res],arr[i]]
      res++;
    }
  }
  console.log(arr);
};
moveZero(arr);
