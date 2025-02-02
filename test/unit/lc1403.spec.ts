xdescribe('leetcode 1403: minimum subsequence in non-increasing order', () => {
    function minSubsequence(nums: number[]): number[] {
        nums.sort((a, b) => b - a);

        const totalSum = nums.reduce((sum, current) => sum + current, 0);

        let subsequenceSum = 0;

        for (let i = 0; i < nums.length; i++) {
            subsequenceSum += nums[i];
            if (subsequenceSum > totalSum - subsequenceSum) {
                return nums.slice(0, i + 1);
            }
        }
        return [];
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
