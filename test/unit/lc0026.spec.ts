xdescribe('leetcode 26: remove duplicates from sorted array', () => {
    function removeDuplicates(nums: number[]): number {
        const set = new Set<number>();
        let l = 0;
        let r = 0;
        let count = 0;
        while (r < nums.length) {
            if (l === r) {
                count++;
                r++;
                continue;
            }

            if (nums[l] === nums[r]) {
                nums[r] = Number.MAX_SAFE_INTEGER;
                r++;
                continue;
            } else {
                l = r;
            }
        }
        nums.sort((a, b) => a - b);
        return count;
    }

    it('test case 1 nums = [1,1,2], Output: [1, 2, _], 2', () => {
        const nums = [1, 1, 2];
        const output = removeDuplicates(nums);
        expect(output).toEqual(2);
        expect(nums[0]).toEqual(1);
        expect(nums[1]).toEqual(2);
    });
});
