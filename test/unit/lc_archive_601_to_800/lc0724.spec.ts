xdescribe('leetcode 724: pivot index', () => {
    function pivotIndex(nums: number[]): number {
        const rangeSum: number[] = [0];

        for (const num of nums) {
            rangeSum.push(rangeSum[rangeSum.length - 1] + num);
        }

        for (let i = 0; i < rangeSum.length; i++) {
            if (rangeSum[i] === rangeSum[rangeSum.length - 1] - rangeSum[i + 1]) {
                return i;
            }
        }

        return -1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
