// Example 1:

// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
// Example 2:

// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

// set up the variables windowStart, charMap, maxFruit
// iterate through the characters in the array and if it is not already in charMap, add them to it
// add 1 if it is already inside

// shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
// we are going to add and compare the current sum to
function fruits_into_baskets(fruits) {
  let windowStart = 0,
    maxLength = 0,
    fruitFrequency = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitFrequency)) {
      fruitFrequency[rightFruit] = 0;
    }
    fruitFrequency[rightFruit] += 1;

    // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
    while (Object.keys(fruitFrequency).length > 2) {
      const leftFruit = fruits[windowStart];
      fruitFrequency[leftFruit] -= 1;
      if (fruitFrequency[leftFruit] === 0) {
        delete fruitFrequency[leftFruit];
      }
      windowStart += 1; // shrink the window
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(
  `Maximum number of fruits: ${fruits_into_baskets(["A", "B", "C", "A", "C"])}`
);
console.log(
  `Maximum number of fruits: ${fruits_into_baskets([
    "A",
    "B",
    "C",
    "B",
    "B",
    "C",
  ])}`
);

console.log(
  `Maximum number of fruits: ${fruits_into_baskets(["A", "B", "C", "A", "C"])}`
);
console.log(
  `Maximum number of fruits: ${fruits_into_baskets([
    "A",
    "B",
    "C",
    "B",
    "B",
    "C",
  ])}`
);
