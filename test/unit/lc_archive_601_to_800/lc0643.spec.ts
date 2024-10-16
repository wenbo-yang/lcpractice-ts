xdescribe('leetcode 643: find max average sub array', () => {
    function findMaxAverage(nums: number[], k: number): number {
        let maxSum = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < k; i++) {
            maxSum += nums[i];
        }

        for (let i = k; i < nums.length; i++) {
            maxSum = Math.max(maxSum, maxSum - nums[i - k] + nums[i]);
        }

        return maxSum / k;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
