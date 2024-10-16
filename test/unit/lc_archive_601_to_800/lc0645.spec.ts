xdescribe('leetcode 645: find missing number', () => {
    function findErrorNums(nums: number[]): number[] {
        const map = new Map<number, number>();
        map.set(0, 1);
        let candidate = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
            if (map.get(nums[i]) === 2) {
                candidate = nums[i];
            }
        }

        return [candidate, map.get(candidate - 1) ? candidate + 1 : candidate - 1];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
