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

function longest_substring_with_k_distinct(str, k) {
  debugger;
  let maxString = 0,
    windowStart = 0,
    charMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // if the character is not already inside the hashmap
    if (!(str[windowEnd] in charMap)) {
      // add it and set it to 0
      charMap[str[windowEnd]] = 0;
    } else {
      // if already inside add 1
      charMap[str[windowEnd]] += 1;
    }
    // shrink the window until we are left with k amount or greater of characters in the charMap
    while (Object.keys(charMap).length > k) {
      const leftChar = str[windowStart];
      charMap[leftChar] -= 1;

      if (charMap[leftChar] <= 0) {
        delete charMap[leftChar];
      }
      windowStart += 1;
    }
    maxString = Math.max(maxString, windowEnd - windowStart + 1);
  }

  return maxString;
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
