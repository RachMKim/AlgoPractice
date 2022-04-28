/* If the fast pointer is one step behind the slow pointer: The fast pointer moves two steps and the slow pointer moves one step, and they both meet.
If the fast pointer is two steps behind the slow pointer: The fast pointer moves two steps and the slow pointer moves one step. After the moves, the fast pointer will be one step behind the slow pointer, which reduces this scenario to the first scenario. This means that the two pointers will meet in the next iteration.

other important thing to note - when the fast gets to the end, it loops back to where slow is and continues on the cycle

*/

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// function has_cycle(head) {
//   debugger;
//   let slow = head,
//     fast = head;
//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow === fast) {
//       return true; // found the cycle
//     }
//   }
//   return false;
// }

// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// head.next.next.next.next.next.next = head.next.next;
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// head.next.next.next.next.next.next = head.next.next.next;
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function find_cycle_length(head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      // found the cycle
      return calculate_cycle_length(slow);
    }
  }
  return 0;
}

function calculate_cycle_length(slow) {
  let current = slow,
    cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current === slow) {
      break;
    }
  }
  return cycle_length;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);
