/*
Maximum Average Subarray I

Example:
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 */

var findMaxAverage = function (nums, k) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  max = sum;

  for (let j = k; j < nums.length; j++) {
    sum = sum + nums[j] - nums[j - k];
    max = Math.max(max, sum);
  }
  return max / k;

  //     let max = Number.MIN_SAFE_INTEGER;;
  //     let sum = 0;
  //     let start = 0;

  //     for( let i = 0; i < nums.length; i++) {
  //         sum += nums[i];

  //         if( i >= k - 1) {
  //             max = Math.max(max,sum)
  //             sum -= nums[start];
  //             start += 1;
  //         }
  //     }
  //     return max / k;
};
