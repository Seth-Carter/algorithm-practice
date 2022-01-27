//https://leetcode.com/problems/palindrome-linked-list/

const isPalindrome = (head) => {
  let fast = head;
  let slow = head;
  while (fast?.next) {
      fast = fast.next.next;
      slow = slow.next;
  }
  
  let pre = slow;
  let current = slow.next;
  let temp = null;
  pre.next = null;
  while (current) {
      temp = current.next
      current.next = pre
      pre = current
      current = temp
  }

  current = pre
  while (current) {
      if (head.val !== current.val) return false
      current = current.next
      head = head.next
  }
  return true
};