xdescribe('leetcode 81: Search in Rotated Sorted Array II', () => {
    function search(nums: number[], target: number): boolean {
        const pivot = findPivot(nums, 0, nums.length);

        if (pivot === -1) {
            return target === nums[0];
        }

        if (target <= nums[pivot] && target >= nums[0]) {
            return binarySearch(nums, 0, pivot);
        } else if (pivot < nums.length - 1 && target >= nums[pivot + 1] && target <= nums[nums.length - 1]) {
            return binarySearch(nums, pivot + 1, nums.length - 1);
        }

        return false;
    }

    function binarySearch(nums: number[], arg1: number, pivot: number): boolean {
        return false;
    }

    function findPivot(nums: number[], l: number, r: number): number {
        if (l > r) {
            return -1;
        }

        if (l === r) {
            return l < nums.length - 1 && nums[l] > nums[l + 1] ? l : -1;
        }

        let pivot = Math.floor((l + r) / 2);

        if (pivot < nums.length - 1 && nums[pivot] > nums[pivot + 1]) {
            return pivot;
        }

        const left = findPivot(nums, l, pivot);

        if (left !== -1) {
            return left;
        }

        return findPivot(nums, pivot + 1, r);
    }

    it('test case 1:, target = 5, output 2 ', () => {
        const nums = [2, 3, 4, 5, 2, 2, 2, 2, 2];
        const result = search(nums, 1);
        expect(result).toBeFalsy();
    });

    it('test case 2:, target = 5, output 2 ', () => {
        const nums = [2, 2, 2, 2, 2, 2, 2, 2, 2];
        const result = search(nums, 1);
        expect(result).toBeFalsy();
    });
});
