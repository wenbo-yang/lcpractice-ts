xdescribe('leetcode 453: description', () => {
    function minMoves(nums: number[]): number {
        return nums.reduce((a,b) => a + b) - nums.length * Math.min(...nums);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
