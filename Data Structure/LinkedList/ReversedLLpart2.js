/*
92. Reverse Linked List II
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]
 */

var reverseBetween = function(head, left, right) {
    if(left === right) return head;

    let cur = head;
    let prev = null;
    let i = 0;
    while(cur !== null && i < left - 1) {
        prev = cur;
        cur = cur.next;
        i += 1;
    }

    const node_before_p = prev
    const node_at_p = cur

    let nextNode = null
    i = 0;
    while(cur !== null && i < right - left + 1) {
        nextNode = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nextNode
        i += 1;
    }

    if(node_before_p !== null) {
        node_before_p.next = prev
    } 
    else {
        head = prev
    }

    node_at_p.next = cur

    return head 

};