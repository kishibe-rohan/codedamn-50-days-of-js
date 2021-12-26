//Write a function which accepts two valid dates and returns the difference between them as number of days

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
  // write your solution here

  //Convert to Date types
  const date1 = new Date(dateText1);
  const date2 = new Date(dateText2);

  //get the difference in ms
  const diff = Math.abs(date1 - date2);

  //convert ms to days
  return Math.ceil(diff / DAY_IN_MILLISECONDS);
}

console.log(
  `Days difference: ${getDaysBetweenDates("10/15/2020", "12/1/2020")}`
);
