xdescribe('leetcode 560: subarray sum equals k', () => {
    function subarraySum(nums: number[], k: number): number {
        let index = 0;
        const rangeSumCount = new Map<number, number>();
        const rangeSum = Array.from(nums);
        let result = 0;
        for (let i = 0; i < rangeSum.length; i++) {
            rangeSum[i] += rangeSum[i - 1] || 0;
            rangeSumCount.set(rangeSum[i], (rangeSumCount.get(rangeSum[i]) || 0) + 1);
            result += rangeSumCount.get(rangeSum[i] - k) || 0;
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
