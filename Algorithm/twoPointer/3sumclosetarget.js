/**
 * 16. 3Sum Closest
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target Return the sum of the three integers.
You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 * 
 */

var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let smallDiff = Infinity;

    for(let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length;
        
        while(left < right) {
             let targetDiff = target - (nums[i] + nums[left] + nums[right]);
        
            if(targetDiff == 0) {
                return target - targetDiff;
                }
        
            if(Math.abs(targetDiff) < Math.abs(smallDiff)) {
                
                smallDiff = targetDiff;
                }

            if(targetDiff > 0) {
                left++;
                }
            else{
                right--;
                }
        }
}
    return target - smallDiff; 
};