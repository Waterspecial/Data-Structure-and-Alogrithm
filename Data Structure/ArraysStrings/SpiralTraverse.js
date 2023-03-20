var spiralOrder = function(matrix) {
        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;
        dir = 0
        const res = [];

        while(top <= bottom && left <= right) {
            if(dir === 0) {
                for(let i = left; i <= right; i++) {
                    res.push(matrix[top][i]);
                }
                top++
            }
            else if (dir === 1){
                for(let i = top; i <= bottom; i++) {
                    res.push(matrix[i][right]);
                }
                right--
            }
            else if(dir === 2) {
                for(let i = right; i >= left; i--) {
                    res.push(matrix[bottom][i]);
                }
                bottom--
            }
            else if(dir === 3) {
                for(let i = bottom; i >= top; i--) {
                    res.push(matrix[i][left])
                }
                left++
            }
            dir = (dir + 1) % 4
        }
        return res;
};
