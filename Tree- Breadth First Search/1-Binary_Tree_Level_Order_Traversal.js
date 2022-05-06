/*
Problem Statement#
Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

Solution#
Since we need to traverse all nodes of each level before moving onto the next level, we can use the Breadth First Search (BFS) technique to solve this problem.

We can use a Queue to efficiently traverse in BFS fashion. Here are the steps of our algorithm:

1. Start by pushing the root node to the queue.
2. Keep iterating until the queue is empty.
3. In each iteration, first count the elements in the queue (let’s call it levelSize). We will have these many nodes in the current level.
4. Next, remove levelSize nodes from the queue and push their value in an array to represent the current level.
5. After removing each node from the queue, insert both of its children into the queue.
6. If the queue is not empty, repeat from step 3 for the next level.
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  // stores final result of all the levels and ndoes
  let result = [];
  if (root === null) {
    return result;
  }
  // set up the queue and push the root
  let queue = [];
  queue.push(root);
  // while there is a node in the queue
  while (queue.length > 0) {
    // set up levelSize -> it will give us how many nodes are in the current level
    let levelSize = queue.length;
    // set up array to hold the nodes of currentLevel
    let currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      // take out the level from the queue -> that is our current Node
      let currentNode = queue.shift();
      // add the node to the current Level
      currentLevel.push(currentNode.val);
      // insert the children of the current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
  }
  return result;
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
