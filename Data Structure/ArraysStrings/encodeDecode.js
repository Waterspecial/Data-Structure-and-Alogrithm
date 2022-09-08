var encode = function(strs) {
    return strs.map((str) => `${str.length}#${str}`).join('');
}

// 4#neet5#code
var decode = (str) => {
    const res = [];
    let i = 0;
    
    while(i < str.length) { // 0 < 12       // 3 < 12
        let j = i;          // j = 0        //  j = 3
        while(str[j] !== "#") {
            ++j;            // j = 1        // j = 7
        }
        const len = Number(str.slice(i, j)); 
        res.push(str.slice(++j, j + len));
        i = j + len;        // i = 2
    }
    return res; //[n]
} 