const singleNumber = function (nums) {

 const map = new Set();

 for (let num of nums) {
   if (map.has(num)) {
     map.delete(num);
   } else {
     map.add(num);
   }
 }
 console.log(map)
 return [...map][0]

 //XOR
 const result = nums.reduce((prev,next)=>prev^next)
 return result
};
console.log(singleNumber([1, 2, 3, 2, 3, 1,0,0, - 77]))
