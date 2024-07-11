xdescribe('leetcode 31: next permutation', () => {
    function nextPermutation(nums: number[]): void {
        if (nums.length <= 1) {
            return;
        }

        let i = nums.length - 2;

        while (i >= 0 && nums[i + 1] <= nums[i]) {
            i--;
        }

        if (i >= 0) {
            let j = nums.length - 1;

            while (j >= 0 && nums[j] <= nums[i]) {
                j--;
            }

            swap(nums, i, j);
        }

        for (let k = i + 1; k < Math.floor((nums.length + i + 2) / 2); k++) {
            swap(nums, k, nums.length - 1 - k);
        }
    }

    function swap(nums: number[], firstIndex: number, secondIndex: number): void {
        const temp = nums[firstIndex];
        nums[firstIndex] = nums[secondIndex];
        nums[secondIndex] = temp;
    }

    it('test case 1 Input: nums = [1,3,2] output [2,1,3]', () => {
        const nums = [1, 3, 2];
        nextPermutation(nums);
        expect(nums).toEqual([2, 1, 3]);
    });

    it('test case 1 Input: nums = [1,2,3] output [1,3,2]', () => {
        const nums = [1, 2, 3];
        nextPermutation(nums);
        expect(nums).toEqual([1, 3, 2]);
    });

    it('test case 2 Input: nums = [3,1,2,2] output [3,2,1,2]', () => {
        const nums = [3, 1, 2, 2];
        nextPermutation(nums);
        expect(nums).toEqual([3, 2, 1, 2]);
    });

    it('test case 3 Input: nums = [3,2,1] output [1,2,3]', () => {
        const nums = [3, 2, 1];
        nextPermutation(nums);
        expect(nums).toEqual([1, 2, 3]);
    });
});
