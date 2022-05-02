class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const can_attend_all_appointments = function (intervals) {
  intervals.sort((a, b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      return false;
    }
  }
  return true;
};

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ])}`
);

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
  ])}`
);

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
  ])}`
);

function can_attend_all_appointments(intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] < b[1] ? -1 : 1;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  });

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      // there is an overlap
      return false;
    }
  }
  return true;
}
