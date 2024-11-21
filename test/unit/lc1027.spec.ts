xdescribe('leetcode 1027: longest arithmetic subsequence', () => {
    function longestArithSeqLength(nums: number[]): number {
        const numsLength = nums.length;
        let longestSubseqLength = 0;
        const dpTable: number[][] = Array.from({ length: numsLength }, () => new Array(1001).fill(0));
        for (let i = 1; i < numsLength; ++i) {
            for (let k = 0; k < i; ++k) {
                const differenceIndex = nums[i] - nums[k] + 500;
                dpTable[i][differenceIndex] = Math.max(dpTable[i][differenceIndex], dpTable[k][differenceIndex] + 1);
                longestSubseqLength = Math.max(longestSubseqLength, dpTable[i][differenceIndex]);
            }
        }
        // Since we counted differences, we add 1 to include the starting element of the subsequence.
        return longestSubseqLength + 1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
