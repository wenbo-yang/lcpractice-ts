xdescribe('leetcode 915: partition into disjoint set', () => {
    function partitionDisjoint(nums: number[]): number {
        let size = nums.length;

        let rightMinimums: number[] = new Array(size + 1).fill(Infinity);

        for (let i = size - 1; i >= 0; --i) {
            rightMinimums[i] = Math.min(nums[i], rightMinimums[i + 1]);
        }

        let leftMax = 0;

        for (let i = 1; i <= size; ++i) {
            let currentValue = nums[i - 1];
            leftMax = Math.max(leftMax, currentValue);

            if (leftMax <= rightMinimums[i]) {
                return i;
            }
        }

        return 0;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
