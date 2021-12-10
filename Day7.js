//Create a regular expression to validate if the given input is valid Indian mobile number or not

const number = "+919876543210";

function validateMobile(number) {
  // write your solution here
  var pattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

  return pattern.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);
