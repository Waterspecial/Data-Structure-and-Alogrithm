/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
 */

// Solution 1
var isValid = char => {
    let validChar = "abcdefghijklmnopqrstuvwxyz0123456789";
    let valid = validChar.indexOf(char.toLowerCase());
    return valid > -1;
}

var isPalindrome = s => {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        while(!isValid(s.charAt(left))){
            left++;
        }
        while(!isValid(s.charAt(right))) {
            right--;
        }
        if(s.charAt(left).toLowerCase() !== s.charAt(right.toLowerCase())) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

//Solution 2

var isPalindrome2 = s1 => {
    s1 = s1.replace(/[^a-z0-9]/gi,"");
    let left1 = 0;
    let right1 = s1.length - 1;

    while(left1 < right2) {
        if(s1[left1].toLowerCase() !== s1[right1].toLowerCase()) {
            return false;
        }
        left1++;
        right1--;
    }
    return true;
}

