function stringdiffrence(s, t) {
    const newS = s.split('').sort()
    const newT = t.split('').sort()
    for(let i =0; i<newS.length;i++){
        if(newS[i]!=newT[i])return newT[i]
    }
    return newT[newT.length-1]
}
console.log(stringdiffrence('ae', 'aea'));
