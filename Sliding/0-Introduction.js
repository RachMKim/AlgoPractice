// Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.

/*
Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
Here, we are asked to find the average of all subarrays of ‘5’ contiguous elements in the given array. Let’s solve this:

For the first 5 numbers (subarray from index 0-4), the average is: (1+3+2+6-1)/5 => 2.2
(1+3+2+6−1)/5=>2.2
The average of next 5 numbers (subarray from index 1-5) is: (3+2+6-1+4)/5 => 2.8
(3+2+6−1+4)/5=>2.8
For the next 5 numbers (subarray from index 2-6), the average is: (2+6-1+4+1)/5 => 2.4
(2+6−1+4+1)/5=>2.4

Here is the final output containing the averages of all subarrays of size 5:

Output: [2.2, 2.8, 2.4, 3.6, 2.8] */

// brute force way
/*
Steps:
1. I want to create a variable of empty array that will store all the average of the subarray
2. I need to iterate through to the end of the array but only looking 5 at a time for the first outer loop
3. the inner loop is going to iterate up to 4 after the i of the inner loop since k = 5
4. create a variable currentSum at the outer iteration to keep track
5. divide the sum by 5 and push that into empty array
*/
function find_averages_of_subarrays(K, arr) {
  let result = [];
  // have the outer layer only look at 5 at a time
  for (let i = 0; i < arr.length - K + 1; i++) {
    let sum = 0;
    // inner loop will look till i + K (5) so 4 elements pass the current one OR going less than 6 so 5 elements
    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K);
  }
  return result;
}

// Optimal way

/*Steps:
1. Set up the variables to store the array of averages, windowSum, and windowStart
2. iterate using the for loop and go all the way to the end of the array and add the sum to windowSum
3. set up a conditional - if windowEnd (which will be i) is greater or equal to K - 1
4. push the sum / K to the empty array
5. take out the element of the window Start from the window sum
6. slide the window
7. return the result
*/
function find_averages_of_subarrays(K, arr) {
  let result = [],
    windowSum = 0,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= K - 1) {
      result.push(windowSum / K);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return result;
}
