xdescribe('leetcode 327: count of range sum', () => {
    function countRangeSum(nums: number[], lower: number, upper: number): number {
        const sum = new Array<number>(nums.length + 1).fill(0);

        for (let i = 1; i < sum.length; i++) {
            sum[i] = sum[i - 1] + nums[i - 1];
        }

        return NaN;
    };

    function mergeAnlyse(sum: number[], lower: number, upper: number, l: number, r: number) {   
        return;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});