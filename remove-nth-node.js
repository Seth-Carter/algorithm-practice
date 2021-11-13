// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// Naive method
const naiveRemoveNthFromEnd = (head, n) => {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  if (length === n) {
    head = head.next;
  } else {
    let iterationCount = 0;
    current = head;
    while (current) {
      iterationCount++;
      let deleteNode = current.next;
      let postNode = current.next.next;
      if (iterationCount === length - n) {
        deleteNode.next = null;
        current.next = postNode;
        break;
      }
      current = current.next;
    }
  }
  return head;
};

// Look ahead node method
const removeNthFromEnd = (head, n) => {
  let lookAhead = head;
  let current = head;
  while (n--) {
    lookAhead = lookAhead.next;
  }
  while (lookAhead && lookAhead.next) {
    current = current.next;
    lookAhead = lookAhead.next;
  }
  if (!lookAhead) {
    head = head.next;
  } else {
    current.next = current.next.next;
  }
  return head;
};
