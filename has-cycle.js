// https://leetcode.com/problems/linked-list-cycle/

const hasCycle = (head) => {
  // With hashing, O(n) time, O(n) space
  // let current = head;
  // const hash = new Set();
  // hash.add(current);
  // while (current && current.next) {
  //     if (hash.has(current.next)) return true;
  //     hash.add(current.next);
  //     current = current.next;
  // }
  // return false;

  // Tortoise and hare pattern
  let fast, slow = head;

  while (fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false
};