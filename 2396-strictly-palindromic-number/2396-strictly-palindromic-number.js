/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    let binary = decimalToBinary(n);
    let ternary = decimalToTernary(n);

    if (binary === ternary) {
        return true;
    } else {
        return false;
    }
    
};

function decimalToBinary(n) {
    return (n >>> 0).toString(2);
}

function decimalToTernary(n) {
    return (n >>> 0).toString(3);
}

