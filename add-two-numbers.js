// https://leetcode.com/problems/add-two-numbers/

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const addTwoNumbers = function (l1, l2) {
  const head = new ListNode();
  let cursor = head;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    if (sum >= 10) {
      sum = sum % 10;
      carry = 1;
    } else {
      carry = 0;
    }
    cursor.next = new ListNode(sum);
    cursor = cursor.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return head.next;
};
