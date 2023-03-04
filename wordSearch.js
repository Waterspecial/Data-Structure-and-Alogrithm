var exist = (board, word) => {
  let result = false;
  
  var check = (row, col, i) => {
    if(row < 0 || col < 0 || row > board.length || col > board[0].length) return 
    if(board[row][col] !== word[i]) return
    if(i === word.length - 1) {
      result = true;
      return
    }
    board[row][col] = null;
    
    check(row+1, col, i+1)
    check(row-1, col, i+1)
    check(row, col+1, i+1)
    check(row, col-1, i+1)
    
    board[row][col] = word[i]
  }
  
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board.length; j++) {
      if(board[i][j] === word[0]) {
        check(i, j, 0)
        if(result) return result;
      }
  }
    return result;
}
  
