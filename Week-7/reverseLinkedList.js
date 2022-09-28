import {linkedList} from "./linkedList.js";
//Given a linked list of N nodes. The task is to reverse this lis
// time complexity o(n) space complexity o(1)

const reverseLinkedList = (list) => {
  let current = list.head;
  let prev = null;
  let after;
  while (current !== null) {
    after = current.next;
    current.next = prev;
    prev = current;
    current = after;
  }
  list.head = prev;
};

const list = new linkedList([1, 2, 3, 4, 5]);
console.log("before reversing");
list.traverseList();
reverseLinkedList(list);
console.log("after traversing");
list.traverseList();
