var longestConsective = function(nums) {
    const set = new (nums);
    let longest = 0;

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(!set.has(num - 1)){
            let currentMax =  1;
            while(set.has(num + currentMax)){
                currentMax++;
            }
            longest = Math.max(longest, currentMax);
        }
    }
    return longest;
}