/* 
Question : Remove Nth Node From End of List
1 -> 2 -> 3 -> 4 -> 5 = 1 -> 2 -> 3 -> 5 

Input: head = [1, 2, 3, 4, 5]  n = 2
Output: [1, 2, 3, 5]
*/

var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let counter = 0;
    let tail = head;
    
    while(counter < n) {
        tail = tail.next;
        counter++;
    }
    let removeNode = head;
    let prevNode = dummyHead;
    while(tail) {
        tail = tail.next;
        removeNode = removeNode.next;
        prevNode = prevNode.next;
    }
    
    prevNode.next = removeNode.next;
    return dummyHead.next;
}