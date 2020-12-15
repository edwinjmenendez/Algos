/**
 * Given a positive integer num consisting only of digits 6 and 9.
 * Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
 */

const maximum69Number  = num => {
  // convert num to string
  let numString = num.toString();
  // create variable to store new string
  let newString = '';
  // will keep track of first '6' found
  let sixFound = false;
  // iterate through each number in the strin
  for (let i = 0; i < numString.length; i++) {
    const number = numString[i];
    // if the current num === 6 and sixFound is false
    if (number === '6' && !sixFound) {
      newString += 9;
      sixFound = true;
    } else {
      newString += number;
    }
  }
  return parseInt(newString);
};

// make it faster!

console.log(maximum69Number(9669))