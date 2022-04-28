/*Problem Statement#
Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

Example 1:

Input: [2, 5, 3, 10], target=30
Output: [2], [5], [2, 5], [3], [5, 3], [10]
Explanation: There are six contiguous subarrays whose product is less than the target.
Example 2:

Input: [8, 2, 6, 5], target=50
Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]
Explanation: There are seven contiguous subarrays whose product is less than the target.

[[8], [8, 2], [2], [2, 6], [6], [6, 5], [6]]
*/

function find_subarrays(arr, target) {
  let result = [],
    product = 1,
    left = 0;
  for (right = 0; right < arr.length; right++) {
    product *= arr[right];
    while (product >= target && left < arr.length) {
      product /= arr[left];
      left += 1;
    }
    // since the product of all numbers from left to right is less than the target therefore,
    // all subarrays from left to right will have a product less than the target too; to avoid
    // duplicates, we will start with a subarray containing only arr[right] and then extend it
    const tempList = [];
    for (let i = right; i > left - 1; i--) {
      tempList.unshift(arr[i]);
      result.push(tempList.toArray());
    }
  }
  return result;
}

// Input: [2, 5, 3, 1], target=30
// Output: [2], [5], [2, 5], [3], [5, 3], [10]
// [2 ]
// [2], [5]
// now current windowStart = 5
// [5]
// [5, 3]
// [5, 3, 1]
// check to see if at the end of the length
// current windowStart = 3
// [3]
// [3, 1]
// currentWindow start = 1
// [1]
// Explanation: There are six contiguous subarrays whose product is less than the target.
// Example 2:
// sliding window approach

// function find_subarrays(arr, target) {
//   let subarray = [];
//   for (let i = 0; i < arr.length; i++) {
//     let window = [];
//     let product = 1;
//     for (let j = i; j < arr.length; j++) {
//       window.push(arr[j]);

//       product *= arr[j];

//       if (product < target) {
//         subarray.push([...window]);
//       } else {
//         break;
//       }
//     }
//   }

//   return subarray;
// }
// console.log(find_subarrays([2, 2, 2, 5, 3, 10], 30));
//console.log(find_subarrays([8, 2, 6, 5], 50));

// []
// [[2], [2, 2], [2, 2, 2], [2, 2, 2]]
