xdescribe('leetcode 462: minimum moves to eqal array elements', () => {
    function minMoves2(nums: number[]): number {
        // [1, 2, 9, 10]
        nums.sort((a, b) => a - b);

        const median = nums[Math.floor(nums.length / 2)];
        let result = 0;

        for (const num of nums) {
            result += Math.abs(median - num);
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
