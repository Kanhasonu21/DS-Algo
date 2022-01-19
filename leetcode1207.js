function isUnique (array){
    let map = {}
    array.forEach(element => {
        if(map[element]===undefined)map[element] = 1
        else map[element] = map[element]+1
    });
    let set = new Set()
    for (const val of Object.values(map)){
        if(set.has(val))return false;
        else set.add(val)
    }
    return true
}
isUnique([1,2,2,1,1,3])