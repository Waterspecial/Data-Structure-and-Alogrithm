var strStr = (haystack, needle) => {
    let m = haystack.length;
    let n = needle.length;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(haystack[i + j] === needle[i]) {
                if(j === n -1) return i
            } else {
                break;
            }
        }    
    }
    return -1
}
