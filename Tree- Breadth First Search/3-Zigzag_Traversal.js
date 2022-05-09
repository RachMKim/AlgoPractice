class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/*
important key: need to have some way that if we are done with one level, the other level with be backwards
to do that we can do condtion, push, or unshift

one overal array variable to store all nodes
put the root in the queue - first in first out
iterate through the whole tree until there is nothing left
have a subarray to contain the level
another iteration for each levels
deque the current Node - which will be first in first out
add the current node to subarray (*unshift or push back and forth between levels!!)
add the children of the current node to the queue
push the subarray into main result array
return the result
*/

const traverse = function (root) {
  let result = [];

  let queue = [];
  queue.push(root);

  let reverse = true;
  while (queue.length > 0) {
    let currentLevel = [];
    let levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      let currentNode = queue.shift();
      if (reverse) {
        currentLevel.push(currentNode.val);
      } else {
        currentLevel.unshift(currentNode.val);
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
    reverse = !reverse;
  }

  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${traverse(root)}`);
