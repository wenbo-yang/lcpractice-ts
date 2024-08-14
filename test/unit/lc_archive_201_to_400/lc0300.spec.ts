xdescribe('leetcode 300: longest increasing subsequence', () => {
    function lengthOfLongestIncreasingSubsequence(nums: number[]): number {
        if (nums.length === 0) {
            return 0;
        }

        let n = nums.length;
        const df = new Array<number>(n).fill(1);
        for (let i = 1; i < n; i++) for (let j = 0; j < i; j++) if (nums[i] > nums[j]) df[i] = Math.max(df[i], df[j] + 1);
        return Math.max(...df);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
