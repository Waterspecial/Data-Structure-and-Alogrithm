
var arrayValuesEqual = (arr1, arr2) => {

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}


var findAnagrams = function(s, p) {
    const sArr = new Array(26).fill(0);
    const pArr =  new Array(26).fill(0);
    const res = [];

    for(let i = 0; i < p.length; i++) {
        let index = p.charCodeAt(i) % 26;
        sArr[index]++;
    }
    for(let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) % 26;
        sArr[index]++; 

        if(i > p.length - 1) {
            let headIdx = s.charCodeAt(i - p.length) % 26;
            sArr[index]++;
        }
        if(i >= p.length - 1) {
            if (arrayValuesEqual(sArr, pArr)) {
                res.push(i - (p.length - 1));
            }
        }
    }
    return res;
}