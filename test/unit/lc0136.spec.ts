xdescribe('leetcode 136: single number', () => {
    function singleNumber(nums: number[]): number {
        const singleNumberSet: Set<number> = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (singleNumberSet.has(nums[i])) {
                singleNumberSet.delete(nums[i]);
            } else {
                singleNumberSet.add(nums[i]);
            }
        }

        return Array.from(singleNumberSet.values())[0];
    }

    it('test case 1 Input:nums = [2,2,1], output 1 ', () => {
        const nums = [2, 2, 1];
        const result = singleNumber(nums);
        expect(result).toEqual(1);
    });
});
