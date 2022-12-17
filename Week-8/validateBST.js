// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// time complexity o(n) and space complexity o(n2)

import {TreeNode, insertIntoTree} from "./treeNode.js";

function inOrderTreeList(root) {
  let list = [];
  if (root !== null) {
    list = [...list, ...inOrderTreeList(root.left)];
    list.push(root.value);
    list = [...list, ...inOrderTreeList(root.right)];
  }
  return list;
}

function isValidBST(arr) {
  const root = insertIntoTree(0, arr);
  const traversalList = inOrderTreeList(root);
  let prev = -Infinity;
  for (let val of traversalList) {
    if (val > prev) {
      prev = val;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isValidBST([2, 1, 3]));

console.log(isValidBST([5, 1, 4, null, null, 3, 6]));
