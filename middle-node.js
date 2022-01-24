// https://leetcode.com/problems/middle-of-the-linked-list/

const middleNode = (head) => {
  let slow = head;
  let fast = head;
  
  while (fast?.next) {
      slow = slow.next
      fast?.next?.next ? fast = fast.next.next : fast = fast.next 
  }
  return slow
};