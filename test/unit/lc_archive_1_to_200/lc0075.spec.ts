xdescribe('leetcode 75: sort colors', () => {
    function sortColors(nums: number[]) {
        let l = 0;
        let r = nums.length - 1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                swap(nums, i, l);
                l++;
            } else if (nums[i] === 2 && i < r) {
                swap(nums, i, r);
                i--;
                r--;
            }
        }
    }

    function swap(nums: number[], i: number, l: number) {
        const temp = nums[i];
        nums[i] = nums[l];
        nums[l] = temp;
    }

    it('test case 1 Input: [2,0,2,1,1,0], output [0,0,1,1,2,2]', () => {
        const nums = [2, 0, 2, 1, 1, 0];
        sortColors(nums);
        expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
    });
});
