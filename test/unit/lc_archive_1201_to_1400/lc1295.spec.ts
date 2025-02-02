xdescribe('leetcode 1295: find numbers with even number of digits', () => {
    function findNumbers(nums: number[]): number {
        return nums.map(n => n.toString()).filter(s => s.length % 2 === 0).length;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
