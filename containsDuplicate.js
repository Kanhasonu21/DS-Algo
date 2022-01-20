var containsDuplicate = function(nums) {
    let map= {
        
    }
    for(let i=0;i<nums.length;i++){
        let data = nums[i]
        if(map[data]==undefined){
            map[data]=data

        }
        else return true
    }
    return false
};
console.log(containsDuplicate([1,2,3,4]));