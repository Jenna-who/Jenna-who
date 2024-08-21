/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    const reversedString = cleanedString.split("").reverse().join("");
    return cleanedString === reversedString;
};
