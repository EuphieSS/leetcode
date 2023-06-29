/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const output = [];
  for (let i = 0; i < nums1.length; i++) {
    let j = nums2.indexOf(nums1[i]) + 1;
    while (j < nums2.length) {
      if (nums2[j] > nums1[i]) {
        output.push(nums2[j]);
        break;
      } else {
        j++;
      }
    }
    if (j === nums2.length) {
      output.push(-1);
    }
  }
  return output;
};