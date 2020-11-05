// O(n^2)
const twoSum = function(nums, target) {
  // constraint: length of array must be > 1
  if (nums.length < 2) return false;
  // iterate through the number array
  for (let i = 0; i < nums.length; i++) {
      // create variable to keep track of currentEl
      const currentElement = nums[i]
      // iterate through array again to compare currentEl with remainder of elements in array
      for (let j = i + 1; j < nums.length; j++) {
          // if currentEl + nextElValue equals to target return pair of indices as array pair
          console.log(currentElement)
          console.log(nums[j])
          if (currentElement + nums[j] === target) return [i, j]
      }
  }
};
console.log(twoSum([2,1,5,5], 10));
const twoSum2 = (nums, target) => {
  // keep track of numbers with cache
  const numStorage = {};
  // iterate through array
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]
    // if number exists in cache return true
    if (numStorage.hasOwnProperty(currentNum)) return [numStorage[currentNum], i];
    // else subtract currentNumber from target (complimentary val) and store it in cache
    else {
      let difference = target - currentNum;
      numStorage[difference] = i;
    }
  } 
}
console.log(twoSum2([2,5,5,11], 10));