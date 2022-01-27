// https://leetcode.com/problems/remove-linked-list-elements/

const removeElements = (head, val) => {
  const newHead = new ListNode(0, head);
  let slow = newHead;
  let fast = head;
  
  while (slow.next) {
      if (fast.val === val) {
          fast = fast.next;
          slow.next = fast;
      } else {
          slow = slow.next;
          fast = fast.next;
      }
  }
  
  return newHead.next
};
