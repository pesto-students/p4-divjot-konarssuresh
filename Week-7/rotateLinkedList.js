import {linkedList} from "./linkedList.js";
// Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,where k is a given positive integer smaller than or equal to length of the linked list
// time complexity o(N) space complexity o(1)
const rotateLinkedList = (list, k) => {
  let initialHead = list.head;
  let current = list.head;
  let pivot;
  while (--k) {
    current = current.next;
  }
  pivot = current;
  current = list.head;
  while (current.next !== null) {
    current = current.next;
  }
  list.head = pivot.next;
  pivot.next = null;
  current.next = initialHead;
};

console.log("list");
const list = new linkedList([2, 4, 7, 8, 9]);
rotateLinkedList(list, 3);
list.traverseList();

console.log("list2");
const list2 = new linkedList([1, 2, 3, 4, 5, 6, 7, 8]);
rotateLinkedList(list2, 4);
list2.traverseList();
