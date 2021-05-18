let arr = [1, 2, 3, 4, 9, 5, 6];
let low = 0;
let high = arr.length - 1;
while (low < high) {
  let temp;
  temp = arr[low];
  arr[low] = arr[high];
  arr[high] = temp;
  low++;
  high--;
}
console.log(arr);
