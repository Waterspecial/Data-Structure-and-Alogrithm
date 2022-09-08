/*
Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

*/

var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false;

    let sMap = {};
    let tMap = {};
    
    for(let i = 0; i < s.length; i++) {
        
        if(sMap.hasOwnProperty(s[i])) {
            sMap[s[i]]++;
        }
        else{
            sMap[s[i]] = 1;
        }
    }
    for(let j = 0; j < t.length; j++) {
        
        if(tMap.hasOwnProperty(t[j])) {
            tMap[t[j]]++;
        }
        else{
            tMap[t[j]] = 1
        }
    }
    for(let k in sMap) {
        
        if(sMap[k] !== tMap[k]){
            return false;
        }
    }
    return true;
};