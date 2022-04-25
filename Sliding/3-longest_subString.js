// Longest Substring with maximum K Distinct Characters (medium)

// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
// Example 2:

// set up the variables accountable
// iterate through the string
// add the characters and its counts to the hashMap
// have a conditional
// slide the window if the conditions meet
// return the maxstring

// function longest_substring_with_k_distinct(str, k) {
//   debugger;
//   let maxString = 0,
//     windowStart = 0,
//     charMap = {};

//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     // if the character is not already inside the hashmap
//     if (!(str[windowEnd] in charMap)) {
//       // add it and set it to 0
//       charMap[str[windowEnd]] = 0;
//     } else {
//       // if already inside add 1
//       charMap[str[windowEnd]] += 1;
//     }
//     // shrink the window until we are left with k amount or greater of characters in the charMap
//     while (Object.keys(charMap).length > k) {
//       const leftChar = str[windowStart];
//       charMap[leftChar] -= 1;

//       if (charMap[leftChar] <= 0) {
//         delete charMap[leftChar];
//       }
//       windowStart += 1;
//     }
//     maxString = Math.max(maxString, windowEnd - windowStart + 1);
//   }

//   return maxString;
// }

// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     "araaci",
//     2
//   )}`
// );
// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     "araaci",
//     1
//   )}`
// );
// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     "cbbebi",
//     3
//   )}`
// );

/* Steps:
1. Set up the variables - maxString, windowStart, and charMap obj to hold the counts
2. Iterate through the string using for loop
3. If the character is not already inside the charMap, add them
4. else add 1
5. Set up conditional while obj.keys.length is > k
6. set up variable leftChar to subtract front characters
6.  shrink the window until left with k amount or greather in charMap
7. if the char in charMap === 0, delete the character
8. move the window start
9. check for the maxString and compare
*/

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
function longest_substring_with_k_distinct(str, k) {
  debugger;
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    2
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    1
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "cbbebi",
    3
  )}`
);
