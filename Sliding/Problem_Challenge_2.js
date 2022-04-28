/* Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc". */

// function find_string_anagrams(str, pattern){



// }
function find_string_anagrams(str, pattern) {
  let windowStart = 0,
    matched = 0,
    charFrequency = {};

  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  let result = []
  // Our goal is to match all the characters from the 'charFrequency' with the current window
  // try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      // Decrement the frequency of matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      result.push(windowStart);
    }

    // Shrink the sliding window
    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }
  return false;
}


console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);
