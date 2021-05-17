const arr = [1, 2, 3, 4, 5, 6, 8];
let largest = arr[0];
let secondL = -1;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondL = largest;
    largest = arr[i];
    
  } else if (arr[i] !== largest) {
    if (arr[i] > secondL|| secondL===-1) secondL = arr[i];
  }
}
console.log(largest, secondL);
