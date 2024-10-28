/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    digits[i] += 1;  // Increment the last digit

    // Handle carry over
    while (digits[i] === 10 && i > 0) {
        digits[i] = 0;
        digits[i - 1] += 1;
        i--;
    }

    // If after the loop, the first digit is still 10, handle it
    if (digits[0] === 10) {
        digits[0] = 1;
        digits.push(0); // Append 0 to the end of the array
    }

    return digits;
};
