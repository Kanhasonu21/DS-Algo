let arr = [3, 1, 2];
let size = arr.length;
let temp = [];
function subsequnce(ind, temp, size) {
  if (ind >= size) {
    console.log(temp);
    return;
  }
  //take
  temp.push(arr[ind]);
  subsequnce(ind + 1, temp, size);
  temp.pop();
  //not take
  subsequnce(ind + 1, temp, size);
}
subsequnce(0, [], size);
