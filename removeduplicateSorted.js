// const arr = [10, 20, 20, 30, 30, 30, 40, 40, 40, 50];
// const removeDuplicate = (arr) => {
//   let res = 0;
//   let newArr = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== newArr[res]) {
//       newArr.push(arr[i]);
//       res += 1;
//     }
//   }
//   console.log(newArr);
// };
let arr = [10, 20, 20, 30, 30, 30, 40, 40, 40, 50];
const removeDuplicate = (arr) => {
  let res = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[res] = arr[i];
      res++;
    }
  }
  for (let i = 0; i < res; i++) console.log(arr[i]);
};
removeDuplicate(arr);
