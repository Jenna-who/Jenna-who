/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(n) {
  if (n===0) return 0;
  if (n % 9 ===0) return 9;
  else return n%9;  
};