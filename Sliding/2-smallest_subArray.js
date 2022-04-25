/*
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to ‘8’ are [3, 4, 1] or [1, 1, 6].


*/

// remember this is calculating for the minLength of the subArray
/* Steps:
1. set up the variables: minlength, windowSum, windowStart
2. Iterate through the arr to the end
3. add the number to windowSum
4. conditional: remember that we are dealing with size S here - while windowSum >= S
5. calculate the minLength and compare between minLength and windowEnd - windowStart + 1
6. subtract the beginning element by using arr[windowStart]
6. slide the window by incrementing one
7. return minLength
*/

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].
function smallest_subarray_sum(s, arr) {
  debugger;
  // we set the minLength to Infinity so when we compare the first minLength it will become minLength
  let minLength = Infinity, //3
    windowSum = 0,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    // must use while and not if
    // because the while loop always checks to see ONCE MORE so it meets condition or not and move on to the outer forloop
    // thus it will always check for minLength and replace it
    // in comparason, the if only checks once and goes back up!!
    while (windowSum >= s) {
      // calculate the length between minLength and the where the index is currently - the windowStart + 1 to get the length
      minLength = Math.min(minLength, windowEnd - windowStart + 1); // 3
      //subtract the beggining element
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  if (minLength === Infinity) {
    return 0;
  } else {
    return minLength;
  }
}
console.log(
  `Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 8])}`
);
