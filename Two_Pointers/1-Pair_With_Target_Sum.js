/* Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11 */

// USING THE TWO POINTERS
/* Steps:
  1. set up variables for the two pointer => left, right
  2. while left < right => meaning they never cross the mid point
  3. the currentSum is set to the addition of elements in the left and right
  4. if the current sum is equal to targetSum
  5. return the indicies which will be left, right
  6. now we can increment the begginging or decrement the end according to the conditions
  7. if targetsum is greater than currentSum, -> we increment the left
  8. otherwise the right gets decremented
  9. if no pairs are found return [-1, -1]
*/

function pair_with_targetsum(arr, target_sum) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target_sum) {
      return [left, right];
    }

    if (target_sum > currentSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return [-1, -1];
}
console.log(pair_with_targetsum([2, 5, 9, 11], 11));

// HASHMAP WAY

/* Steps
  1. set up variable to store numbers and the indicies
  2. iterate through the array using for loop
  3. set up conditional - if targetSum - num(currentElement) is in nums, return the indicies
  4. otherwise set up the hasMap as currentnumber key and index value
*/

function pair_with_target_sum(arr, targetSum) {
  // this is also known as finding the compliment
  debugger;
  const nums = {}; // store numbers and their indicies

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (targetSum - num in nums) {
      // meaning 4 - 2 is inside the hashmap
      // return [2, current i which is 4]
      return [nums[targetSum - num], i];
    }
    nums[num] = i;
  }
  return [-1, -1];
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
