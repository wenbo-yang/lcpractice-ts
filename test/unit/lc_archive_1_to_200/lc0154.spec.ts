xdescribe('leetcode 154: find min in rotated sortede array with dups', () => {
    function findMin(nums: number[]): number {
        if (nums.length === 1) {
            return nums[0];
        }

        // [2, 2, 2, 0, 2 ]
        //
        // [2, 0, 2, 2, 2]
        // pivot + 1 < pivot

        const pivot = findPivot(nums, 0, nums.length - 1);

        return pivot;
    }

    function findPivot(nums: number[], startingIndex: number, endingIndex: number): number {
        if (startingIndex + 1 >= endingIndex) {
            return Math.min(nums[startingIndex], nums[endingIndex]);
        }

        const pivot = Math.floor((startingIndex + endingIndex) / 2);

        if (nums[pivot + 1] < nums[pivot]) {
            return nums[pivot];
        }

        if (nums[pivot] < nums[endingIndex]) {
            return findPivot(nums, startingIndex, pivot);
        }

        return Math.min(findPivot(nums, startingIndex, pivot), findPivot(nums, pivot + 1, endingIndex));
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
