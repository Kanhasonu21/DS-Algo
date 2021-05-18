let arr = [5, 6, 0, 7, 0, 1, 2, 0];
const moveZero = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[res] = arr[i];
      res++;
    }
  }
  for (let i = res; i < arr.length; i++) {
    arr[i] = 0;
  }
  console.log(arr);
};
moveZero(arr);
