/* 
Given the head of a linked list and an integer val, 
remove all the nodes of the linked list that has Node.val == val, and return the new head.
    1 -> 2 ->6 -> 3 -> 4 -> 5 -> 6 === 1 -> 2 -> 3 -> 4 -> 5
    Input: head = [1,2,6,3,4,5,6], val = 6
    Output: [1,2,3,4,5]
*/



var removeElements = function(head, val) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let cur = head;
    
    while(cur){
        
        if(cur.val === val){
            prev.next = cur.next;
            cur = cur.next;
            continue
        }
        prev = cur;
        cur = cur.next;
    }
    return dummy.next;
};
