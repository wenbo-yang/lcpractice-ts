xdescribe('leetcode 219: contains nearby duplicate', () => {
    function containsNearbyDuplicate(nums: number[], k: number): boolean {
        const map: Map<number, number> = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i]) && (i - (map.get(nums[i]) || Number.MIN_SAFE_INTEGER) <= k )) {
                return true;
            }
            else {
                map.set(nums[i], i);
            }
        }

        return false;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
