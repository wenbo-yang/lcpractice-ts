xdescribe('leetcode 34: Find First and Last Position of Element in Sorted Array', () => {
    function searchRange(nums: number[], target: number): number[] {
        const retVal = searchRangeHelper(nums, target, 0, nums.length - 1);
        if (retVal[0] === Number.MAX_SAFE_INTEGER) {
            return [-1, -1];
        }

        return retVal;
    }

    function searchRangeHelper(nums: number[], target: number, l: number, r: number): number[] {
        if (nums[l] > target || nums[r] < target || l > r) {
            return [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
        }

        if (nums[l] === target && nums[r] === target) {
            return [l, r];
        }

        const pivot = Math.floor((l + r) / 2);

        const fromLeft = searchRangeHelper(nums, target, 0, pivot);
        const fromRight = searchRangeHelper(nums, target, pivot + 1, nums.length);

        return [Math.min(fromLeft[0], fromRight[0]), Math.max(fromLeft[1], fromRight[1])];
    }

    it('test case 1 Input: nums = [5,7,7,8,8,10], target = 8, output [3,4] ', () => {
        const nums = [5, 7, 7, 8, 8, 10];
        const target = 8;

        const result = searchRange(nums, target);

        expect(result).toEqual([3, 4]);
    });
});
