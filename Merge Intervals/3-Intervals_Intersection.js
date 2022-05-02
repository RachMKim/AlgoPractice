class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

function merge(intervals_a, intervals_b) {
  let result = [],
    i = 0,
    j = 0;

  while (i < intervals_a.length && j < intervals_b.length) {
    // check if intervals overlap and intervals_a[i]'s start time lies within the other intervals_b[j]
    a_overlaps_b =
      intervals_a[i].start >= intervals_b[j].start &&
      intervals_a[i].start <= intervals_b[j].end;

    // check if intervals overlap and intervals_b[j]'s start time lies within the other intervals_a[i]
    b_overlaps_a =
      intervals_b[j].start >= intervals_a[i].start &&
      intervals_b[j].start <= intervals_a[i].end;

    // store the the intersection part
    if (a_overlaps_b || b_overlaps_a) {
      result.push(
        new Interval(
          Math.max(intervals_a[i].start, intervals_b[j].start),
          Math.min(intervals_a[i].end, intervals_b[j].end)
        )
      );
    }
    // move next from the interval which is finishing first
    if (intervals_a[i].end < intervals_b[j].end) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return result;
}

process.stdout.write("Intervals Intersection: ");
let result = merge(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals Intersection: ");
result = merge(
  [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
  [new Interval(5, 10)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

// class function solution that works the same :

function merge(intervals_a, intervals_b) {
  let result = [],
    i = 0,
    j = 0;

  while (i < intervals_a.length && j < intervals_b.length) {
    let maxStart = Math.max(intervals_a[i].start, intervals_b[j].start);
    let minEnd = Math.min(intervals_a[i].end, intervals_b[j].end);

    if (maxStart <= minEnd) {
      result.push(new Interval(maxStart, minEnd));
    }
    if (intervals_a[i].end < intervals_b[j].end) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return result;
}

// brute force

// function intervalIntersection(firstList, secondList) {

//   let i = 0, j = 0
//   let res = [];

//   while (i < firstList.length && j < secondList.length) {
//       let maxStart = Math.max(firstList[i][0], secondList[j][0]);
//       let minEnd = Math.min(firstList[i][1], secondList[j][1]);

//       if (maxStart <= minEnd) res.push([maxStart, minEnd]) // overlap found

//       if (firstList[i][1] < secondList[j][1]) i++;
//       else j++;
//   }

//   return res;
// };

function intervalIntersection(intervals_a, intervals_b) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < intervals_a.length && j < intervals_b.length) {
    a_overlaps_b =
      intervals_a[i][0] >= intervals_b[j][0] &&
      intervals_a[i][0] <= intervals_b[j][1];
    b_overlaps_a =
      intervals_b[j][0] >= intervals_a[i][0] &&
      intervals_b[j][0] <= intervals_a[i][1];

    if (a_overlaps_b || b_overlaps_a) {
      result.push([
        Math.max(intervals_a[i][0], intervals_b[j][0]),
        Math.min(intervals_b[j][1], intervals_a[i][1]),
      ]);
    }

    if (intervals_a[i][1] < intervals_b[j][1]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return result;
}
