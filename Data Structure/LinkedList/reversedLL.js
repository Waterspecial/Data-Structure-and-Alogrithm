// Question : Given the head of a singly linked list, reverse the list, and return the reversed list.

// 1 -> 2 -> 3 -> 4 -> 5 -> null ===== null -> 5 -> 4 -> 3 -> 2 -> 1

var reverseList = function(head) {
    let prev = null;
    let nextNode;
    
    while(head !== null) {
        nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }
    return prev;
};