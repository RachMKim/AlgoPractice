/*
To reverse a LinkedList, we need to reverse one node at a time. We will start with a variable current which will initially point to the head of the LinkedList and a variable previous which will point to the previous node that we have processed; initially previous will point to null.

In a stepwise manner, we will reverse the current node by pointing it to the previous before moving on to the next node. Also, we will update the previous to always point to the previous node that we have processed. Here is the visual representation of our algorithm:


*/

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }

//   print_list() {
//     let temp = this;
//     while (temp !== null) {
//       process.stdout.write(`${temp.value} `);
//       temp = temp.next;
//     }
//     console.log();
//   }
// }

// function reverse(head) {
//   debugger;
//   let current = head,
//     previous = null;
//   while (current !== null) {
//     next = current.next; // temporarily store the next node
//     current.next = previous; // reverse the current node
//     previous = current; // before we move to the next node, point previous to the current node
//     current = next; // move on the next node
//   }
//   return previous;
// }

// const head = new Node(2);
// head.next = new Node(4);
// head.next.next = new Node(6);
// head.next.next.next = new Node(8);
// head.next.next.next.next = new Node(10);

// process.stdout.write("Nodes of original LinkedList are: ");
// head.print_list();
// result = reverse(head);
// process.stdout.write("Nodes of reversed LinkedList are: ");
// result.print_list();

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

const reverse = function (head) {
  debugger;
  let current = head;
  let previous = null;

  while (current !== null) {
    // temp store next node
    next = current.next;
    // reverse current node
    current.next = previous;
    // before moving on, point previous to current node
    previous = current;
    // move next node
    current = next;
  }
  // return the new head
  return previous;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`);
