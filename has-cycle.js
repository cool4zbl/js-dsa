//Given head, the head of a linked list, determine if the linked list has a cycle in it.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//  1 ->7-> 8-> 9->  2-> 3-> 4->2 ->5->12->14

const hasCycle = function (head) {
  if (!head.next) return

  let p0 = head
  let p1 = head.next

  let hasCircuit = false

  while (p0 !== p1) {
    if (!p1 || !p1.next) {
      return false
    }

    p0 = p0.next
    p1 = p1.next.next
  }
}
