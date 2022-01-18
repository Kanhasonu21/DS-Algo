function smallestDifference(arrayOne, arrayTwo) {
  const sorted_array1 = arrayOne.sort((a, b) => a - b);
  const sorted_array2 = arrayTwo.sort((a, b) => a - b);
  let smallest = Infinity
  let current = Infinity
  let idxOne = 0;
  let idxTwo = 0;
  let pairArray = [];
  while (idxOne < sorted_array1.length && idxTwo < sorted_array2.length) {
    firstArrayValue = sorted_array1[idxOne];
    secondArrayValue = sorted_array2[idxTwo];
    if (firstArrayValue < secondArrayValue) {
      current = secondArrayValue - firstArrayValue;
      idxOne += 1;
    } else if (secondArrayValue < firstArrayValue) {
      current = firstArrayValue - secondArrayValue;
      idxTwo += 1;
    } else return [firstArrayValue, secondArrayValue];
    if (smallest > current) {
      smallest = current;
      pairArray = [firstArrayValue, secondArrayValue];
    }
  }
  return pairArray;
}

// Do not edit the line below.
let array1 = [-1, 5, 10, 20, 28, 3];
let array2 = [26, 134, 135, 15, 17];
console.log(smallestDifference(array1, array2));
