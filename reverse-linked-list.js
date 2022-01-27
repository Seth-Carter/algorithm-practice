// https://leetcode.com/problems/reverse-linked-list/

const reverseList = (head) => {
  if (!head?.next) return head;
  
  let prev = head;
  let current = head.next;
  let temp = null;
  prev.next = null;
      
  while (current) {
      temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
  }
  
  return prev;
};

const reverseListEs6 = (head) => {
  if (!head?.next) return head;
    
  let prev = head;
  let current = head.next;
  prev.next = null;
      
  while (current) {
      [current.next, current, prev] = [prev, current.next, current];
  }
  
  return prev   
}