//Write a function which can convert the time input given in 12 hours format to 24 hours format

const time = "11:9PM";

function convertTo24HrsFormat(time) {
  // write your solution here

  let [hrs, mins] = time.split(":");
  mins = mins.substring(0, mins.length - 2); //strip the AM/PM

  //12:15 AM -> 00:15
  if (time.endsWith("AM")) {
    if (hrs === "12") hrs = "00";
  }

  //05:15 PM -> 17:15
  else if (time.endsWith("PM")) {
    if (parseInt(hrs, 10) < 12) hrs = parseInt(hrs, 10) + 12;
  }

  //Add missing 0s
  if (mins.length < 2) mins = "0" + mins;

  if (hrs.length < 2) hrs = "0" + hrs;

  return `${hrs}:${mins}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
