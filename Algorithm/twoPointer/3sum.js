/*
15. 3Sum (Medium)
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplet
 */
var threeSum = function(nums){
    nums.sort((a, b) => a - b);
    const res = [];

    for(let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        if(i > 0 && nums[i] === nums[i - 1]) continue;

        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum > 0) right-= 1;
            else if(sum < 0) left += 1;
            else{
                let arr = [nums[i], nums[left], nums[right]];
                res.push(arr);
                left += 1;

                while(nums[left] === nums[left - 1] && left < right) left += 1;
            }
        }
    }
    return res;
}