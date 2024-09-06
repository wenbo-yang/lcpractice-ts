xdescribe('leetcode 523: continuous subarray sum', () => {
    function checkSubarraySum(nums: number[], k: number): boolean {
        if (nums.length < 2) {
            return false;
        }

        const rangeSum = initRangeSum(nums);
        // [ 6, 7, 8, 13] //

        const reminderSet = new Set<number>();

        reminderSet.add(rangeSum[0] % k);
        reminderSet.add(0);

        for (let i = 1; i < rangeSum.length; i++) {
            if (rangeSum[i] >= k && reminderSet.has(rangeSum[i] % k)) {
                return true;
            } else {
                reminderSet.add(rangeSum[i] % k);
            }
        }

        return false;
    }

    function initRangeSum(nums: number[]): number[] {
        const rangeSum = Array.from(nums);
        for (let i = 1; i < rangeSum.length; i++) {
            rangeSum[i] += rangeSum[i - 1];
        }

        return rangeSum;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
