xdescribe('leetcode 189: rotate array k times', () => {
    // idea
    // concat string
    // pop k times into new string push length - k times
    function rotate(nums: number[], k: number): void {
        const other = nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));

        for (let i = 0; i < nums.length; i++) {
            nums[i] = other[i];
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        rotate(nums, 3);

        expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });
});
