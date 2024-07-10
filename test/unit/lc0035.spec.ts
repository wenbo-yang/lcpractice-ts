xdescribe('leetcode 35: Find First and Last Position of Element in Sorted Array', () =>{
    function searchInsert(nums: number[], target: number): number {
        if (target < nums[0]) {
            return 0;
        }

        if (target > nums[nums.length - 1]) {
            return nums.length;
        }

        return searchInsertHelper(nums, target, 0, nums.length - 1);
    };

    function searchInsertHelper(nums: number[], target: number, l: number, r: number): number {
        if (l >= r) {
            return l;
        }

        const pivot = Math.floor((l + r) / 2);

        return target <= nums[pivot] ? searchInsertHelper(nums, target, l, pivot) : searchInsertHelper(nums, target, pivot + 1, r);
    }
    
    it('test case 1 Input: nums = [1,3,5,6], target = 5, output 2 ', () => {
        const nums = [1,3,5,6];
        const target = 5;

        const result = searchInsert(nums, target);

        expect(result).toEqual(2);
    });
});

