/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let newx = String(x);
    let result = newx.split('').reverse().join('');
    if(newx == result){
        return true;
    }
    else{
        return false;
    }


};

