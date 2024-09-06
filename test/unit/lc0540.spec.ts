xdescribe('leetcode 540: single element in sorted array', () => {
    function singleNonDuplicate(nums: number[]): number {
        if (nums.length < 3 || nums.length % 2 === 0) {
            return Number.MIN_SAFE_INTEGER;
        }

        let r = nums.length - 1;
        let l = 0;

        let pivot = Math.floor((r + l) / 2);

        while (pivot < nums.length) {
            if (nums[pivot] < nums[pivot + 1] && nums[pivot] > nums[pivot - 1]) {
                return nums[pivot];
            }

            if (nums[pivot] === nums[pivot - 1]) {
                r = pivot;
            } else {
                l = pivot + 1;
            }
        }

        return Number.MIN_SAFE_INTEGER;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
