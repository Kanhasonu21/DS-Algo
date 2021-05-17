const arr = [ 1,1];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
let res = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== max) {
    if (res === -1) res = i;
    else if (arr[i] > res) res = arr[i];
  }
}
console.log(max, res);
