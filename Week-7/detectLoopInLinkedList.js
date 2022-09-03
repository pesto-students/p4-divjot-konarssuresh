import {linkedList} from "./linkedList.js";

const createLoop = (list, position) => {
  let current = list.head;
  let temp;
  let loopPosition = 0;
  while (current.next !== null) {
    loopPosition++;
    if (position === loopPosition) {
      temp = current;
    }
    current = current.next;
    console.log("while");
  }
  if (temp) {
    current.next = temp;
  }
};

// Given a linked list of N nodes. The task is to check if the linked list has a loop. Linkedlist can contain self loop.
// time complexity o(N) space complexity o(1)

const detectLoopInALinkedList = (list) => {
  let slowPointer = list.head;
  let fastPointer = list.head;

  while (slowPointer && fastPointer && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer === fastPointer) {
      return true;
    }
  }
  return false;
};

console.log("list1");
const list = new linkedList([1, 3, 4]);
createLoop(list, 2);
console.log(detectLoopInALinkedList(list));
console.log("list2");
const list2 = new linkedList([1, 8, 3, 4, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(detectLoopInALinkedList(list2));
