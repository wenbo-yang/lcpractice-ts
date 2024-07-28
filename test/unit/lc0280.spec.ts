xdescribe('leetcode 280: wiggle sort', () => {
    function wiggleSort(nums: number[]): void {
        for (let i = 1; i < nums.length; ++i) {
            if ((i % 2 == 1 && nums[i] < nums[i - 1]) || (i % 2 == 0 && nums[i] > nums[i - 1])) {
                swap(nums, i, i - 1);
            }
        }
    }

    function swap(nums: number[], i: number, j: number) {
        let t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
