var maxAreaOfIsland  = function(grid) {
	
	let res =  0;
	
	let m = grid.length;
	let n = grid[0].length
	
	var helper = (x, y) => {
		if(x < 0 || y < 0 || x >= m || y >= n || grid[x][y] !== 1) {
			return 0
		}
		grid[x][y] = 0;
		return 1 + helper(x-1, y) + helper(x, y-1) + helper(x+1, y) + helper(x, y+1)
	}
	
	for(let i = 0; i < m; i++){
		for(let j = 0; j < n; j++) {
			if(grid[i][j]) {
				res = Math.max(res, helper(i,j))
			}	
		}
	}
	return res
}
