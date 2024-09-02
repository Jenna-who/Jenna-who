/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
 const countMap = new Map();

 for (let num of nums){
    if (countMap.has(num)){
        countMap.set(num, countMap.get(num)+1);
    }
    else {
        countMap.set(num, 1);
    }
 }  

 for(let [num, count] of countMap){
    if (count === 1){return num;
    
    }
 }
}