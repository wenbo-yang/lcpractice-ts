xdescribe('leetcode 217: contains duplicate', () => {
    function containsDuplicate(nums: number[]): boolean {
        const set: Set<number> = new Set();

        for (const num of nums) {
            if (set.has(num)) {
                return true;
            }
        }

        return false;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
