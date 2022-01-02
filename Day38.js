//Implement Luhn Algorithm

const valid = (string) => {
  // code here

  //accept only dashes,spaces and numbers
  if (/[^0-9-\s]+/.test(string)) return false;

  let current = 0,
    digit = 0,
    evenIndex = false;
  let sum = 0;

  //trim spaces
  string = string.replace(/\D/g, "");

  for (let n = string.length - 1; n >= 0; n--) {
    (current = string.charAt(n)), (digit = parseInt(current, 10));

    if (evenIndex) {
      if ((digit *= 2) > 9) digit -= 9;
    }

    sum += digit;
    evenIndex = !evenIndex;
  }

  return sum % 10 == 0;
};
