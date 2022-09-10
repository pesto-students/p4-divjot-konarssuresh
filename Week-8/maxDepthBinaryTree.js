// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// time complexity o(n) space complexity o(n)

import {TreeNode} from "./treeNode.js";

function calculateHeight(root) {
  if (root === null) {
    return 0;
  }
  let leftHeight = calculateHeight(root.left);
  let rightHeight = calculateHeight(root.right);
  if (leftHeight > rightHeight) {
    return leftHeight + 1;
  } else {
    return rightHeight + 1;
  }
}

function insertIntoTree(i, arr) {
  let curr = null;
  if (i < arr.length) {
    curr = new TreeNode(arr[i]);
    curr.left = insertIntoTree(2 * i + 1, arr);
    curr.right = insertIntoTree(2 * i + 2, arr);
  }
  return curr;
}

const maxDepthBinaryTree = (treeInput) => {
  const root = insertIntoTree(0, treeInput);
  return calculateHeight(root);
};

console.log(maxDepthBinaryTree([3, 9, 20, null, null, 15, 7]));
console.log(maxDepthBinaryTree([1, null, 2]));
