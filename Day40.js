const needsLicense = (kind) => {
  // code here

  return kind === "car" || kind === "truck";
};

const chooseVehicle = (option1, option2) => {
  // code here

  let choice;
  choice = option1.localeCompare(option2) === -1 ? option1 : option2;

  return `${choice} is clearly the better choice.`;
};

const calculateResellPrice = (originalPrice, age) => {
  // code here
  let price;

  if (age < 3) price = originalPrice * 0.8;
  else if (age > 10) price = originalPrice * 0.5;
  else if (age >= 3 && age <= 10) price = originalPrice * 0.7;

  return price;
};
