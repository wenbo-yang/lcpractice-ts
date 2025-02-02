xdescribe('leetcode 1388: pizza with 3n slices', () => {
    function maxSizeSlices(slices: number[]): number {
        const selectCount = Math.floor(slices.length / 3);

        
        const calculateMaxSize = (nums: number[]): number => {
            const length = nums.length;
            const dp: number[][] = Array.from({ length: length + 1 }, () => Array(selectCount + 1).fill(0));

            for (let i = 1; i <= length; ++i) {
                for (let j = 1; j <= selectCount; ++j) {
                    dp[i][j] = Math.max(
                        dp[i - 1][j],
                        (i > 1 ? dp[i - 2][j - 1] : 0) + nums[i - 1]
                    );
                }
            }

            return dp[length][selectCount];
        };

        const maxWithFirstExcluded = calculateMaxSize(slices.slice(0, -1));
        const maxWithLastExcluded = calculateMaxSize(slices.slice(1));

        return Math.max(maxWithFirstExcluded, maxWithLastExcluded);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
