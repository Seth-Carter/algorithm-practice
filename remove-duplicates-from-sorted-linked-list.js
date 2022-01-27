// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

const deleteDuplicates = (head) => {
  let slow = head;
  let fast = head?.next;
  
  while (slow?.next) {
      if (slow.val === fast.val) {
          fast = fast.next;
          slow.next = fast;
      } else {
          slow = slow.next;
          fast = fast.next;
      }
  }
  return head;
};