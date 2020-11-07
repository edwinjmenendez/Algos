// find if an integer is a palindrome
const isPalindrome = x => {
  // if number is less than 0 return false
  if (x < 0) return false;
  // constraints: -2^31 <= x <= 2^31 - 1
  if (x > 2**31 - 1) return false;
  // convert number into string and store as variable
  let numToString = x.toString();
  // iterate through new string number
  for (let i = 0; i < numToString.length; i++) {
    // if first char does not equal last char return false
    if (numToString[i] !== numToString[numToString.length - 1 - i]) return false;
  }
  // return true
  return true;
};
console.log(isPalindrome(1111111111));