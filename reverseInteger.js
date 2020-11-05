const reverse = x => {
  // given an integer we want to reverse it 
  // turn the integer into a string so create a variable for it
  let numToString = x
  // if integer is negative, make it into a positive
  if (numToString > -9 && numToString < 10) return x;  
  // reverse the string's order
  // convert back to integer
  // if original value was negative, multiply by -1
}
console.log(reverse(-1))