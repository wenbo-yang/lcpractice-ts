xdescribe('leetcode 910: smallest range II', () => {
    function smallestRangeII(nums: number[], k: number): number {
        nums.sort((a, b) => a - b);
        const numsSize: number = nums.length;
    
        let minRange: number = nums[numsSize - 1] - nums[0];
    
        for (let i = 1; i < numsSize; ++i) {
            const newMin: number = Math.min(nums[0] + k, nums[i] - k);
        
            const newMax: number = Math.max(nums[i - 1] + k, nums[numsSize - 1] - k);
        
            minRange = Math.min(minRange, newMax - newMin);
        }
    
        return minRange;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
