/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

Output: true
 
 */

var isValidSudoku = function (board) {
  const rows = {};
  const cols = {};
  const squared = {};

  for (let i = 0; i < 9; i++) {
    for (let i = 0; i < 9; i++) {
      value = board[i][j];
      const grid = `${Math.floor(i / 3)}${Math.floor(j / 3)};`;

      if (!rows[i]) {
        rows[i] = new Set();
      }
      if(!cols[j]) {
        cols[j] = new Set();
      }
      if(!squared[grid]) {
        squared[grid] = new Set();
      }
      if(rows[i].has(value) || cols[j].has(value) || squared[grid].has(value)){
        return false;
      }
      rows[i].add(value);
      cols[j].add(value);
      squared[grid].add(value);
    }
  }
  return true;
};
