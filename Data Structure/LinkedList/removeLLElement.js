/* 
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
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