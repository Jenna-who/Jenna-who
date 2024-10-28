/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let none_dup = [...new Set(nums)];
    let sorted = none_dup.sort(function(a, b){return a-b});
    const last = sorted[sorted.length - 1];

    if (sorted.length>= 3) return sorted[sorted.length-3];
    return last;
};