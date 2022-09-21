/*

Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

// solution 1
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let max = 0;
    let set = new Set();

    while(end < s.length) {
        if(set.has(s.charAt(end))) {
            set.delete(s.charAt(start));
            start++;
        }
        else{
            set.add(s.charAt(end));
            max = Math.max(max, set.size)
            end++
        }
    }
    return max;
}

// solution 2

var lengthOfLongestSubstring = function(s) {
    let windwowEnd = 0;
    let maxLength = 0;
    let hashMap = {};

    for(let windowStart = 0; windowStart < s.length; windowStart++) {
        let right = s[windwowEnd]

        hashMap[right] = hashMap[right] + 1 || 1

        while(hashMap[right] > 1) {
            let left = hashMap[windowStart];

            if(hashMap[left] === 0) {
                delete hashMap[left];
            }
            hashMap[left] -= 1;
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, (windwowEnd - windowStart) + 1)
    }
    return maxLength;
}

// solution 3
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let windowStart = 0
    let hash = {}

    for(let windowsEnd = 0; windowsEnd < s.length; windowsEnd++) {
        let rightChar = s[windowsEnd];

        if(hash[rightChar]) {
            windowStart = Math.max(windowStart, hash[rightChar] + 1);
        }

        hash[rightChar] = windowsEnd;
        maxLength = Math.max(maxLength, (windowsEnd - windowStart) + 1)
    }
    return maxLength;
}

// solution 4

var lengthOfLongestSubstring = function(s) {
    let maxLength = o;
    let map = new Map();
    for(let start = 0; start < s.length; start++) {
        for(let end = start; end < s.length; end++) {
            let char = s[end];
            if(map.has[char]) {
                map.clear();
                break;
            }
            else{
                map.set(char, end)
                maxLength = Math.max(maxLength, (end - start) + 1);
            }
        }
    } 
}