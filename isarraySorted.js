const arr = [1];
let isArraySorted = true;
if (arr.length > 1) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isArraySorted = false;
      break;
    }
  }
}

console.log(isArraySorted);
