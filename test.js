var subarraySumBF = function (nums, k) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    let base = 0;
    for (let j = i; j < nums.length; j++) {
      base += nums[j];
      if (base == k) counter++;
    }
  }
  return counter;
};

console.log(subarraySumBF([1], 0)); // 0
console.log(subarraySumBF([1, 1, 1], 2)); // 2
console.log(subarraySumBF([1, 2, 3], 3)); // 2
console.log(subarraySumBF([1, 2, 1, 2, 1], 3)); // 4
