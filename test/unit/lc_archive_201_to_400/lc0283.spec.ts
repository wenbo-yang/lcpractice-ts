xdescribe('leetcode 283: move zeros', () => {
    function moveZeroes(nums: number[]): void {
        const firstIndex = nums.findIndex((n) => n === 0);

        if (firstIndex === -1) {
            return;
        }

        let l = firstIndex;
        let r = firstIndex;

        while (r < nums.length) {
            if (nums[r] === 0) {
                r++;
                continue;
            }

            if (nums[r] !== 0) {
                swap(nums, l, r);
                l++;
                continue;
            }
        }
    }

    function swap(nums: number[], l: number, r: number) {
        nums[l] = nums[r];
        nums[r] = 0;
    }

    it('test case 1 Input: [0,1,0,3,12] output [1,3,12,0,0]', () => {
        const nums = [0, 1, 0, 3, 12];
        moveZeroes(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });
});
