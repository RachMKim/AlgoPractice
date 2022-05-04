// Longest Substring with Distinct Characters (hard)

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring with distinct characters is "abc".

// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring with distinct characters is "ab".

//set up variables- windowStart, charMap, maxLength
// iterate through the string
// if the character already in the charMap- shrink the window from the beginning so that we only have 1 character
// add the windowStart
// else we insert the character into the charMap
// keep track of the max length
// return the max length

// thing to note - this is all going by index!!! so anything that has to do with distinct character is going to be based off on index
// unless the problem is asking for count, remember to store index as value!!!
function non_repeat_substring(str) {
  let windowStart = 0,
    charMap = {},
    maxLength = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str[windowEnd];

    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (char in charMap) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charMap[char] + 1);
    } else {
      // insert the 'char' into the map
      charMap[char] = windowEnd;
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  }
  return maxLength;
}

// function non_repeat_substring(str) {
//   let longestStr = '';
//   let currentStr = '';

//   for(let i = 0; i < str.length; i++) {
//     let letter = str[i];
//     let index = currentStr.indexOf(letter);

//     if(index > -1) {
//       if(currentStr.length > longestStr.length) longestStr = currentStr;
//       currentStr = currentStr.slice(index + 1) + letter;
//     }
//     else {
//       currentStr += letter;
//     }
//   }
//   if(currentStr.length > longestStr.length) longestStr = currentStr;
//   return longestStr.length;
// }

console.log(
  `Length of the longest substring: ${non_repeat_substring("aabccbb")}`
);
console.log(
  `Length of the longest substring: ${non_repeat_substring("abbbb")}`
);
console.log(
  `Length of the longest substring: ${non_repeat_substring("abccde")}`
);
