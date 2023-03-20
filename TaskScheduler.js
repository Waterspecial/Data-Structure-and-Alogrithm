var leastInterval = (tasks, n) => {
	let map = new Map();
	
	let maxVal = 0;
	let maxValCount = 0;
	
	for(let k of tasks) {
		let val = map.has(k) ? map.get(k) + 1: 1;
		
		if(val > maxVal) {
			maxVal = val;
			maxValCount = 1
		} else {
			maxValCount++
		}
	}
	return Math.max(tasks.length, (maxVal-1) * (n + 1) +maxValCount)
}
