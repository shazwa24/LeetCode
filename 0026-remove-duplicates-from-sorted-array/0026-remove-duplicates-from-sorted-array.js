/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    l=0
    for (let i = 0; i < nums.length; i++)
    {
        if(nums[i] != nums[i+1])
        {
            nums[l] = nums[i]
            l++;
        }
    }
    return l
};