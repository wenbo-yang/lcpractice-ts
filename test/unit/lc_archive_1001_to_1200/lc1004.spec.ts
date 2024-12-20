xdescribe('leetcode 1004: max consecutive ones', () => {
    function longestOnes(nums: number[], k: number): number {
        const lengthOfNums = nums.length;
        let leftPointer = 0;
        for (const num of nums) {
            if (num === 0) {
                k--;
            }
            if (k < 0 && nums[leftPointer++] === 0) {
                k++;
            }
        }
        
        return lengthOfNums - leftPointer;
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
