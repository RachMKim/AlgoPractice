class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/*
steps:
add the root to the queue
iterate through the whole tree til there is nothing left in the queue
while I am interating I need to apply the BFS logic
I need to find the subarray which will be the level
iterate through until I reach the length of the level and push the node until the end of the level
deque the first node in the queue array
push that to the subarray
queue up the child of the currentNode

after the iteration is done, I need to unshfit the subarray to the main overal result array

when we get to the end of the tree, return the result
*/

function traverse(root) {
  let result = [];
  if (root === null) {
    return result;
  }
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let currentLevel = [];
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let currentNode = queue.shift();
      currentLevel.push();
    }
  }
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Reverse level order traversal: ${traverse(root)}`);
