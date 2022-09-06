/*
Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
 */

var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(-Infinity);
    let prev = dummy;
    
    while(list1 && list2) {
        
        if(list1.val <= list2.val){
            prev.next = list1;
            prev = list1;
            list1 = list1.next;
        }
        else{
            prev.next = list2;
            prev = list2;
            list2 = list2.next;
        }
    }
    if(!list1) prev.next = list2;
    if(!list2) prev.next = list1;
    return dummy.next;
};