/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */

const removeDuplicates = nums => {
  // if array length is less than two return length of array or if length > 3*10^4
  if (nums.length < 2) return nums.length;
  if (nums.length > 3*(10**4)) return 'false; length too big';
  // iterate through array of numbers
  for (let i = 0; i < nums.length; i++) {
    // each number must be in between 10^4 <= nums[i] <= 10^4
    if (nums[i] < -(10**4) || nums[i] > 10**4) return 'false; number out of bounds';
    // if currEl is greater than nextEl return false
    if (nums[i] > nums[i + 1]) return 'false; not ascending';
    // if currentEl equals next el in array remove that currentEL from array (in place)
    if (nums[i] === nums[i+1] || nums[i] === nums[i-1]) {
      nums.splice(i, 1)
      console.log(nums)
    }
  }
  // return length of array
  return nums.length;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,4,4,4,4,4]));