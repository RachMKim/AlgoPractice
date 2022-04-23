// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".

// Input: String="abbcb", k=1
// Output: 4
// Explanation: Replace the 'c' with 'b' to have the longest repeating substring "bbbb".

// Set up the variables
// iterate through the string and add one letter at a time in the window
// keep track of the count of repeating letter in any window (maxRepeat)
// at anytime we know we have a window with one letter repeating - > try to replace remaining letters
// - if the remaining letters and less than or equal to k, replace them all
// - if we have more than k remaining letters, we should shrink teh window as we cannot replace more than k letters

/* While shrinking the window, we don’t need to update maxRepeat (hence, it represents the maximum repeating count of ANY letter for ANY window). Why don’t we need to update this count when we shrink the window? Since we have to replace all the remaining letters to get the longest substring having the same letter in any window, we can’t get a better answer from any other window even though all occurrences of the letter with frequency maxRepeat is not in the current window. */

function length_of_longest_substring(str, k) {
  debugger;
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;
    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      frequencyMap[rightChar]
    );
    // check the other solution but if this was an else statement, the first if should have started with frequencyMap[rightChar] = 1;

    /* if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 1;
    }else{
      frequencyMap[rightChar] += 1;
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);
    } */
    // run the debugger to see!

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters
    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(length_of_longest_substring("aabccbb", 2));
console.log(length_of_longest_substring("abbcb", 1));
console.log(length_of_longest_substring("abccde", 1));
