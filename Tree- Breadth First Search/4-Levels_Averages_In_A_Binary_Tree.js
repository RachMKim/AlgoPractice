class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_level_averages = function (root) {
  let result = [];

  if (root === null) {
    return result;
  }

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let levelLength = queue.length;

    let sum = 0;
    for (let i = 0; i < levelLength; i++) {
      let currentNode = queue.shift();

      sum += currentNode.val;
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(sum / levelLength);
  }

  return result;
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level averages are: ${find_level_averages(root)}`);
