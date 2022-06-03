class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_minimum_depth = function (root) {
  let minDepth = 0;

  if (root === null) {
    return minDepth;
  }
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    minDepth += 1;
    let levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      let currentNode = queue.shift();

      if (currentNode.left === null && currentNode.right === null) {
        return minDepth;
      }
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
