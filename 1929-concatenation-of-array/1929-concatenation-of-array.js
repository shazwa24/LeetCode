/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let n = nums.length
   const ans = new Array(n*2); 
   
   for (let i = 0; i < nums.length; i++) {
       ans[i] = nums[i];
       ans[i + n] = nums[i];
   }
   return ans
};