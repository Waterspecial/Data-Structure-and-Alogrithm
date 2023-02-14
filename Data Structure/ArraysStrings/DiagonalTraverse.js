var findDiagonalOrder = function(mat) {  
let rows = mat.length;
    let cols = mat[0].length;
    const result = new Array(rows + cols -1).fill(null).map(() => []);
    
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if((row + col) % 2 === 0) {
                result[row + col].unshift(mat[row][col]);
            }else{
                result[row + col].push(mat[row][col]);
            }
        }
    }
    return result.flat()
}
