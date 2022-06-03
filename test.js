/*
create a calculator class that can perform teh following operations
1. add two numbers and return the result
2. subtract two numbers and return the result
3. count the number of times add or subtract has been called
4. list the last 3 opperations that were performed
*/
class Calculator {
  constructor() {
    this.countObject = {};
    this.queue = [];
  }

  add(a, b) {
    if (!("add" in this.countObject)) {
      this.countObject["add"] = 1;
    } else {
      this.countObject["add"]++;
    }

    this.queue.push(`${a} add ${b}`);
    while (this.queue.length > 3) {
      this.queue.shift();
    }
    return a + b;
  }

  subtract(a, b) {
    if (!("subtract" in this.countObject)) {
      this.countObject["subtract"] = 1;
    } else {
      this.countObject["subtract"]++;
    }
    this.queue.push(`${a} subtract ${b}`);
    while (this.queue.length > 3) {
      this.queue.shift();
    }
    return a - b;
  }

  count() {
    return this.countObject;
  }

  list() {
    return this.queue;
  }
}

let calculator = new Calculator();

// ["1 add 2", "4 add 5", "6 subtract 3", "9 subtract 4"]

calculator.add(1, 2); // 3
calculator.add(4, 5); // 9

calculator.subtract(6, 3); // 3
calculator.subtract(9, 4); // 5

calculator.count(); // {add: 2, subtract: 2}
calculator.list(); // ["9 subtract 4", "6 subtract 3", "4 add 5"]

calculator.add(3, 3);
calculator.list(); // ["3 add 3", "9 subtract 4", "6 subtract 3"]
calculator.count(); // {add: 3, subtract: 2}
