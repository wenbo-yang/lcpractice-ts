xdescribe('leetcode 1035: max uncrossed lines', () => {
    function maxUncrossedLines(nums1: number[], nums2: number[]): number {
        const lengthNums1 = nums1.length;
        const lengthNums2 = nums2.length;
        const dp: number[][] = Array.from({ length: lengthNums1 + 1 }, () => new Array(lengthNums2 + 1).fill(0));
    
        for (let i = 1; i <= lengthNums1; ++i) {
            for (let j = 1; j <= lengthNums2; ++j) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                if (nums1[i - 1] === nums2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
            }
        }
    
        return dp[lengthNums1][lengthNums2];
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
