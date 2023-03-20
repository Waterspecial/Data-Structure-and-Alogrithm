/*
36 Valid Soduku

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

*/

var isValidSoduku = (board) => {
  
  
  for(let i = 0; i < 9; i++){
    
    let rows = new Set();
    let cols = new Set();
    let boxs = new Set();
    
    for(let j = 0; j < 9; j++) {
    
      let row = board[i][j]
      let col = board[j][i]
      let box = board[3 * Math.floor(i/ 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      
      if(row !== ".") {
         if(rows.has(row)) return false;
        rows.add(row);
      }
      if(col !== ".") {
         if(cols.has(col)) return false;
        cols.add(col);
      }
      if(box !== ".") {
         if(boxs.has(box)) return false;
        boxs.add(box);
      }
    }
  } 
  return true;
} 
