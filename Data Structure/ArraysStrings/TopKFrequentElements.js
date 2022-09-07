/* 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/
var topKFrequent = function (nums, k) {
  var hash = {};
  var arr = Array.from({ length: nums.length + 1 }, () => []);

  for (let v of nums) {
    hash[v] = hash[v] ? 1 + hash[v] : 1;
  }

  for (let j in hash) {
    arr[hash[j]].push(j);
  }

  let res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length >= 0) {
      arr[i].forEach((num) => res.push(num));
    }
    if (k === res.length) {
      return res;
    }
  }
};
