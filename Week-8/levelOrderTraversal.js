// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// time complexity - o(n) space complexity - o(n2)
import {insertIntoTree, TreeNode} from "./treeNode.js";

const levelOrder = (root) => {
  if (root === null) {
    return [];
  }
  let result = [[root.value]];
  let tempQueue = [];
  let tempResult = [];
  let queue = [root];

  while (queue.length !== 0) {
    let element = queue.shift();
    if (element.left !== null) {
      tempQueue.push(element.left);
      element.left.value && tempResult.push(element.left.value);
    }
    if (element.right !== null) {
      tempQueue.push(element.right);
      element.right.value && tempResult.push(element.right.value);
    }
    if (queue.length === 0 && tempResult.length !== 0) {
      queue = tempQueue;
      result.push(tempResult);
      tempQueue = [];
      tempResult = [];
    }
  }
  return result;
};

const root = insertIntoTree(0, [3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(root));
