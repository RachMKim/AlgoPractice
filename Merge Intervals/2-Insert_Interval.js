function insert(intervals, new_interval) {
  debugger;
  let merged = [];
  intervals.push(new_interval);

  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] < b[1] ? -1 : 1;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  });

  let previous = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];

    if (current[0] <= previous[1]) {
      previous[1] = Math.max(previous[1], current[1]);
    } else {
      merged.push(previous);
      previous = current;
    }
  }
  merged.push(previous);
  return merged;
}
// [[1,3], [4,7], [8,12]]
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
//[[1,3], [4,12]]
console.log(
  insert(
    [
      [1, 3],
      [5, 7],
      [8, 12],
    ],
    [4, 10]
  )
);

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

function insert(intervals, new_interval) {
  let merged = [],
    i = 0;

  // skip and add to output) all intervals that come before the 'new_interval'
  while (i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i]);
    i += 1;
  }

  // merge all intervals that overlap with 'new_interval'
  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].end, new_interval.end);
    i += 1;
  }

  // insert the new_interval
  merged.push(new_interval);

  // add all the remaining intervals to the output
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }

  return merged;
}

process.stdout.write("Intervals after inserting the new interval: ");
let result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals after inserting the new interval: ");
result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 10)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals after inserting the new interval: ");
result = insert([new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
