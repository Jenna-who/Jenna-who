/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let totalsum = n*(n+1)/2;
    let arrsum = nums.reduce((a,b)=> a+b, 0);

    return totalsum - arrsum;
};