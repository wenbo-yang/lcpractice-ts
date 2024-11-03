xdescribe('leetcode 912: sort array', () => {
    function sortArray(nums: number[]): number[] {
        const n = nums.length;
        quickSort(0, n - 1, nums);
    
        return nums;
    };

    function quickSort(left: number, right: number, nums: number[]) {
        if (left >= right) {
            return;
        }

        let i = left - 1;
        let j = right + 1;

        const pivot = nums[(left + right) >> 1];

        while (i < j) {
            while (nums[++i] < pivot);
            while (nums[--j] > pivot);

            if (i < j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        quickSort(left, j, nums);
        quickSort(j + 1, right, nums);
    }


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
