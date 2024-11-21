xdescribe('leetcode 908: smallest range I', () => {
    function smallestRangeI(nums: number[], k: number): number {
        const maxValue = nums.reduce((currentMax, value) => Math.max(currentMax, value), -Infinity);
        const minValue = nums.reduce((currentMin, value) => Math.min(currentMin, value), Infinity);
    
        return Math.max(maxValue - minValue - k * 2, 0);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
