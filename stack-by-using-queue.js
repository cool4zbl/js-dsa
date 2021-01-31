// 108. Implement a Stack by using Queue
// @see https://bigfrontend.dev/problem/Implement-a-Stack-by-using-Queue

/* you can use this Queue which is bundled together with your code
class Queue {
  enqueue(element) {
    // add new element to the queue
  }
  peek() {
    // return the head element
  }
  dequeue() {
    // remove head element from the queue
  }
  size() {
    // return the queue size
  }
}
*/

// you need to complete the following Stack, using only Queue
/**
 * 只需用一个队列即可，当然用两个栈也可以实现，不过空间复杂度高了
 */
class Stack {
  constructor() {
    this.que0 = new Queue()
  }

  /**
   * push
   * 栈与队列的顺序是相反的，所以一旦有新元素入队列，先直接加到最后，再依次从队列第一个元素旋转，依次加到队尾，则新入的 element 自然成了队列第一个元素
   * @param element new element
   */
  push(element) {
    let rotations = this.que0.size()
    this.que0.enqueue(element)
    while (rotations--) {
      this.que0.enqueue(this.que0.dequeue())
    }
  }
  peek() {
    // get the top element
    return this.que0.peek()
  }
  pop() {
    // remove top element from stack
    return this.que0.dequeue()
  }
  size() {
    // return count of elements
    return this.que0.size()
  }
}
