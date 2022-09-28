class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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

export {TreeNode, insertIntoTree};
