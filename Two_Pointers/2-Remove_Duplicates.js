// Using hashamp

function remove_duplicates(arr) {
  let hashmap = {};

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (!(currentElement in hashmap)) {
      hashmap[currentElement] = 1;
    }
  }
  return Object.keys(hashmap).length;
}

// USING TWO POINTERS
/* Steps:
  1. set up the variabe nextNonDuplicate and i. i will be the next that hops on
  2. while i is less than the length of array
  3. if arr at nextNon Dup -1 does ot equal to element of arr[i] meaning it is not a duplicate
  4. we are goint to set the nonduplicate element as arr[i] element
  5. move the pointer of nondup
  6. otherwise it is a duplicate -> increment the i
  7. return the next non duplicate
*/
function remove_duplicates(arr) {
  debugger;
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;

  // i is next
  let i = 0;
  while (i < arr.length) {
    // if the two numbers in array are not the same
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      // move the nextNonDuplicate pointer
      arr[nextNonDuplicate] = arr[i];
      // add 1
      nextNonDuplicate += 1;
    }
    // otherwise add the i
    i += 1;
  }

  return nextNonDuplicate;
}

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));

// const remove_duplicates = (arr) => {
//   if (arr.length <= 1) return arr.length;

//   let checker = 1;
//   for (let i = 1; i < arr.length; i++)
//     if (arr[checker - 1] !== arr[i]) arr[checker++] = arr[i];
//   console.log(arr);
//   return checker;
// };

// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));

// Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

// Example 1:

// Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
// Output: 4
// Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
// Example 2:

// Input: [2, 11, 2, 2, 1], Key=2
// Output: 2
// Explanation: The first two elements after removing every 'Key' will be [11, 1].

function remove_elements(arr, key) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      counter++;
    }
  }
  return counter;
}

function remove_element(arr, key) {
  let nextElement = 0; // index of the next element which is not 'key'
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = arr[i];
      nextElement += 1;
    }
  }
  return nextElement;
}

console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);
