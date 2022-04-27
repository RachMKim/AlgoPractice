/* Triplets_with_Smaller_Sum

Problem Statement#
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Example 1:

Input: [-1, 0, 2, 3], target=3
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
Example 2:

Input: [-1, 4, 2, 1, 3], target=5
Output: 4
Explanation: There are four triplets whose sum is less than the target:
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

*/

/* Steps:
1. since the array is not sorted, lets sort them
2. create a variable count where its going to hold all the count of the triplets that are less than target
3. iterate through the array but go to 2 less than length of array since right in the helper function will account for the end
4. we are going to add count whatever value we get from helper function search pair
5. searpair takes the arr, targetSum, and first as variables
6. from triplet function, we are going to pass in arr, target- arr[i], i

SEARCH PAIR FUNCTION
7. have a variable count
8. left is going to be first + 1 (i + 1) since i always begins at 0, it will be one more than i
9. right is going to be the end
* important to note that target some is calculated by target - arr[i] so when later there is a comparason,
* it makes sure everything is kept within boundaries
10. while left is less than right
11. if element of array at left + right < targetsum -> we have found the triplet that is less than target
    since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
   left and right to get a sum less than the target sum
12. left gets incremented so move the pointer
13. else if sum of left anr right is greather, we decrement the right
14. right kinda gets reset by the variable declaration in the beginning
*/
function triplet_with_smaller_sum(arr, target) {
  debugger;
  arr.sort((a, b) => a - b);
  let count = 0;
  for (i = 0; i < arr.length - 2; i++) {
    count += search_pair(arr, target - arr[i], i);
  }
  return count;
}

function search_pair(arr, target_sum, first) {
  let count = 0;
  let left = first + 1,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] < target_sum) {
      // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      count += right - left;
      left += 1;
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
  return count;
}

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
