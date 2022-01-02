// Check is given year is leap year or not

const isLeap = (year) => {
	// code here

return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

