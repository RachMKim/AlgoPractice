/* Problem Statement #
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
one [1,5].

Example 2:

Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

Example 3:

Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, we merged them into one. */

// class is object data structure
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

function merge(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  // sort the intervals on the start time
  // sort the subarrays of from least to greatest according to first interval
  intervals.sort((a, b) => a.start - b.start);

  const mergedIntervals = [];
  let start = intervals[0].start,
    end = intervals[0].end;
  for (i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) {
      // overlapping intervals, adjust the 'end'
      end = Math.max(interval.end, end);
    } else {
      // non-overlapping interval, add the previous interval and reset
      mergedIntervals.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  // add the last interval
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
}

process.stdout.write("Merged intervals: ");
let result = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Merged intervals: ");
result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Merged intervals: ");
result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

// NON CLASS SOLUTION

function merge(intervals) {
  let merged = [];
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      a[1] < b[1] ? -1 : 1;
    } else {
      a[0] < b[0] ? -1 : 1;
    }
  });
  let previous = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];

    if (current[0] <= previous[1]) {
      // we have an overlap
      previous[1] = Math.max(previous[1], current[1]);
    } else {
      // we dont have an overlap
      merged.push(previous);
      previous = current;
    }
  }
  merged.push(previous);
  return merged;
}
