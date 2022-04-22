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
const max_sub_array_of_size_k = function (k, arr) {
  // set up variables to calculate the maxSum, window start
  let windowStart = 0,
    maxSum = 0,
    windowSum = 0;

  // iterate through the array

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add the next element
    windowSum += arr[windowEnd];

    // slide the window but no need to slide if we havent met the size of k
    // if i or windowEnd is >= 2 - 1
    if (windowEnd >= k - 1) {
      // reassign maxsum as needed
      maxSum = Math.max(windowSum, maxSum);
      // take out the beginning one that was added
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }
  return maxSum;
};
