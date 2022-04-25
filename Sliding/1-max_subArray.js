// const max_sub_array_of_size_k = function(k, arr) {
//   let maxSum = 0;

//   // go up to the k basically => length - k + 1 so less than 1 number highter than k
//   for (let i = 0; i < arr.length - k + 1; i++){
//     let currentSum = 0;

//     // inner loop goes till window size -> need this to add up the current sum
//     for (let j = i; j < i + k; j++){
//       currentSum += arr[j]
//     }
//     // check which is bigger and replace accordingly
//     maxSum = Math.max(currentSum, maxSum)

//   }
//   return maxSum
// };

// better approach
// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].
// const max_sub_array_of_size_k = function (k, arr) {
//   // set up variables to calculate the maxSum, window start
//   let windowStart = 0,
//     maxSum = 0,
//     windowSum = 0;

//   // iterate through the array

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     // add the next element
//     windowSum += arr[windowEnd];

//     // slide the window but no need to slide if we havent met the size of k
//     // if i or windowEnd is >= 2 - 1
//     if (windowEnd >= k - 1) {
//       // reassign maxsum as needed
//       maxSum = Math.max(windowSum, maxSum);
//       // take out the beginning one that was added
//       windowSum -= arr[windowStart]; // subtract the element going out
//       windowStart += 1; // slide the window ahead
//     }
//   }
//   return maxSum;
// };

// brute forced way
/* Steps:
1. set up the variables maxSum that will hold the number
2. Iterate through the array up to the K + 1 so that we are only looking at number up to K
3. set up the currentSum
4. Set the inner loop to go up to the i + k
5. add the numbers to the current Sum
6. calculate the max between the currentSum and maxSum
7. return maxSum
*/
// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length - k + 1; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// Optimal Solution
/* Steps:
1. set up the variables maxSum that will hold the number, windowStart, windowSum
2. Iterate through the array up to the the end add the currentElement to the windowSum
4. set up a if conditional if the windowEnd is >= k - 1 => which means we reach the length of the subarray
5. calculate the maxBetween currentSum and maxSum
6. subtract the begginning element
7. increment the windowStart
8. return the maxSum
*/

function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0,
    windowStart = 0,
    windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}
