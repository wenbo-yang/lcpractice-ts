xdescribe('leetcode 561: array partition', () => {
    function arrayPairSum(nums: number[]): number {
        let index = 0;
        return nums
            .sort((a, b) => a - b)
            .map((n) => (index++ % 2 === 1 ? 0 : n))
            .reduce((a, b) => a + b);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
