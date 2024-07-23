xdescribe('leetcode 220: contains nearby almost duplicate', () => {
    function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
        const map: Map<number, number> = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i]) && i - (map.get(nums[i]) || Number.MIN_SAFE_INTEGER) <= indexDiff) {
                return true;
            } else {
                let minValue = nums[i] - valueDiff;
                const rangeValue = new Array<number>(valueDiff * 2 + 1).fill(0).map((i) => minValue++);
                for (const num of rangeValue) {
                    map.set(num, i);
                }
            }
        }

        return false;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
