// given an integer we want to reverse it 
const reverseInt = x => {
  // if x is a single digit value return x
  if (x > -9 && x < 10) return x;
  // create a variable if integer is negative, make it into a positive
  let numToString = x;
  if (x < 0) numToString *= -1;
  // convert variable into string; split it as an array; reverse each el in array; join elements together as string
  numToString = numToString.toString().split('').reverse().join('')
  // convert back to integer
  numToString = parseInt(numToString)
  // if original value was negative, multiply by -1
  if (x < 0) numToString *= -1;
  // if numString exceeds 32 bit return 0
  if (numToString > 2**31 - 1 || numToString < -(2**31)) return 0;
  return numToString;
}
console.log(reverseInt(-1534236469))