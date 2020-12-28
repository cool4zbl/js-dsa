// 13. Implement a Queue by using Stack
// @see https://bigfrontend.dev/problem/implement-a-queue-by-using-stack

/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
/**
 * Using two stacks to implement.
 */
class Queue {
  constructor() {
    this.stack0 = new Stack()
    this.stack1 = new Stack()
  }
  enqueue(element) {
    while (this.stack0.size()) {
      this.stack1.push(this.stack0.pop())
    }
    this.stack0.push(element)
    while (this.stack1.size()) {
      this.stack0.push(this.stack1.pop())
    }
    // add new element to the rare
  }
  peek() {
    return this.stack0.peek()
    // get the head element
  }
  size() {
    return this.stack0.size()
    // return count of element
  }
  dequeue() {
    return this.stack0.pop()
    // remove the head element
  }
}
