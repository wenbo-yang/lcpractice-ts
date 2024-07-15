xdescribe('leetcode 153: description', () => {
    // find pivot such that pivot + 1 < pivot

    function findMin(nums: number[]): number {
        if (nums[0] <= nums[nums.length - 1]) {
            return nums[0];
        }

        const pivot = findPivot(nums, 0, nums.length - 1);

        return nums[pivot + 1];
    }

    function findPivot(nums: number[], startingIndex: number, endingIndex: number): number {
        if (startingIndex >= endingIndex) {
            return nums.length;
        }

        const pivot = Math.floor((startingIndex + endingIndex) / 2);
        // [4,5,6,7,1,2]
        //  0 1 2 3 4 5
        //
        if (nums[pivot + 1] < nums[pivot]) {
            return pivot;
        }

        return nums[startingIndex] > nums[pivot] ? findPivot(nums, startingIndex, pivot) : findPivot(nums, pivot + 1, endingIndex);
    }

    it('test case 1 Input: [4,5,6,7,1,2], output 1', () => {
        const nums = [4, 5, 6, 7, 1, 2];
        const result = findMin(nums);

        expect(result).toEqual(1);
    });

    it('test case 1 Input: [1,2,3,4,5,6], output 1', () => {
        const nums = [1, 2, 3, 4, 5, 6];
        const result = findMin(nums);

        expect(result).toEqual(1);
    });
});
