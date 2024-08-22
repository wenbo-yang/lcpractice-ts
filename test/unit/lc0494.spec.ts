xdescribe('leetcode 494: number of ways to target sum', () => {
    function findTargetSumWays(nums: number[], target: number): number {
        
        const mem = new Map<string, number>();

        return findWaysHelper(nums, target, mem);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

function findWaysHelper(nums: number[], target: number, mem: Map<string, number>): number {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0] === target ? 1 : 0;
    }

    if (mem.has(toKey(nums,target))) {
        return mem.get(toKey(nums, target)) || 0;
    }

    const last = nums[nums.length - 1];
    nums.pop();
    let count = findWaysHelper(Array.from(nums), target + last, mem);
    count += findWaysHelper(Array.from(nums), target - last, mem);

    mem.set(toKey(nums, target), count);

    return count;
}

function toKey(nums: number[], target: number): string {
    return nums.toString() + "_" + target.toString();
}

