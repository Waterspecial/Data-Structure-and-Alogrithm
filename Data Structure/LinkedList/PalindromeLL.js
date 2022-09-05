/*
Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
Input: head = [1,2,2,1]
Output: true

 */

const reverse = (head) => {
    let cur = head;
    let prev = null
    let nextNode;
    
    while(cur) {
        nextNode = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nextNode;
    }
    return prev
}
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    let startPointer = head;
    let len = 0;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        len++;
    }
    
    let mid = reverse(slow);
    
    while(len){
        len--;
        if(mid.val !== startPointer.val) return false;
        mid = mid.next;
        startPointer = startPointer.next;
    }
    return true;
};