function insert(intervals, new_interval) {
  debugger;
  let merged = [];

  for (let i = 0; i < intervals.length; i++) {
    let current = intervals[i];
    if (new_interval[0] <= current[1]) {
      // there is overlap
      current[1] = Math.max(current[1], new_interval[1]);
      current[0] = Math.min(current[0], new_interval[0]);
      break;
    } else {
      merged.push(current);
    }
  }
  merged.push(intervals[i + 1]);
  return merged;
}
// function insert(intervals, newInterval) {
//   const result = [];

//   for (let i = 0; i < intervals.length; i++) {
//     let interval = intervals[i];

//     // If overlaps
//     if (
//       Math.max(interval[0], newInterval[0]) <=
//       Math.min(interval[1], newInterval[1])
//     ) {
//       newInterval = [
//         Math.min(interval[0], newInterval[0]),
//         Math.max(interval[1], newInterval[1]),
//       ];
//       continue;
//     }

//     // If lower
//     if (interval[0] > newInterval[1]) {
//       result.push(newInterval, ...intervals.slice(i));
//       return result;
//     }

//     result.push(interval);
//   }

//   result.push(newInterval);
//   return result;
// }

// function insert(intervals, newInterval) {
//   const result = []

//   /*
//   Three cases:
//   1 - If we have already added newInterval or the current interval ends before the new one starts
//   2 - If newInterval ends before the current one starts
//   3 - If there is an overlap that requires a merge
//   */

//   for (const [start, end] of intervals) {
//       if (!newInterval || end < newInterval[0]) {
//           result.push([start, end])
//       } else if (newInterval[1] < start) {
//           result.push(newInterval)
//           newInterval = null
//           result.push([start, end])
//       } else {
//           newInterval[0] = Math.min(newInterval[0], start)
//           newInterval[1] = Math.max(newInterval[1], end)
//       }
//   }

//   // If newInterval has not been added it means it must be the last one
//   if (newInterval) {
//       result.push(newInterval)
//   }

//   return result
// };

console.log(
  insert(
    [
      [1, 3],
      [5, 7],
      [8, 12],
    ],
    [4, 6]
  )
);
