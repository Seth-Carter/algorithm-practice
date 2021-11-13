// https://leetcode.com/problems/middle-of-the-linked-list/

// Naive method
const middleNode = (head) => {
  let length = 0;
  let current = head;
  while (current.next) {
    length++;
    current = current.next;
  }
  current = head;
  for (let i = 0; i < Math.ceil(length / 2); i++) {
    current = current.next;
  }
  return current;
};

// Fast and slow method
const middleNode2 = (head) => {
  let fast,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
