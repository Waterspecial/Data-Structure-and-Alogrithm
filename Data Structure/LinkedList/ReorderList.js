/*You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example:
l1 -> l2 -> l3 -> l4 -> l5 

answer
l1 -> l5 -> l2 -> l4 -> l3
*/

/*Psuecode
1. Get the middle of the linkedlist which is going to form linkedlist.
2. We'll then reverse the linkedlist 
3. Mege the Linkedlist togther
*/

var orderList = function (head) {
  if (head === null || head.next === null || head.next.next === null) {
    return head;
  }
  // get the middle of Linkedlist
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let secondHalf = slow.next;
  slow.next = null;

  // reversed the new Linkelist which is from the middle
  let reversed = reverse(secondHalf);
  let finalHead = head;

  // Merge the two Linkedlist together
  let l1 = null;
  let l2 = null;
  
  while(reversed !== null) {
    l1 = finalHead.next;
    l2 = reversed.next;

    finalHead.next = reversed;
    reversed.next = l1
  }
};
