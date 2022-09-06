/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
    ll 2 --> 4 --> 3
    l2 5 --> 6 --> 4

    result  7 --> 0 --> 8

    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807
 */

var addTwoNumbers = (l1, l2) => {
    let carry = 0;
    let dummy = new ListNode(-1);
    let result = dummy;

    while(l1 || l2 || carry){

        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;

        let nextDigits = (l1Val + l2Val + carry) % 10;
        result.next = new ListNode(nextDigits);
        result = result.next;

        carry =  Math.floor((l1Val + l2Val + carry / 10));

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return dummy.next;
}