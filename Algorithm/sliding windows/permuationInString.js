const inclusive = (s1, s2) => {
    if (s1.length > s2.length) return false;

    let start = 0
    let match = 0;
    let map = {};

    for(let chr of s1) {
        map[chr] = map[chr] + 1 || 1;
    }
    for(let end = 0; end < s2.length; end++) {
        let right = s2[end];
        if(right in map) {
            map[right]--;
            if(map[right] === 0) {
                match++
            }
        }
        if(match === Object.keys(map).length) {
            return true;
        }

        if(end >= s2.length - 1) {
            let leftChar = s2[start];
            start++
            if(leftChar in map) {
                if(map[leftChar] === 0) {
                    match--
                }
                map[leftChar]++
            }
        }
    }
    return false;
}