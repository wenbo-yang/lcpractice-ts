xdescribe('leetcode 448: Find All Numbers Disappeared in an Array', () => {
    function findDisappearedNumbers(nums: number[]): number[] {
        let l = 0;
        while (l < nums.length) {
            swapUntilEveryThingInOrder(nums, l++);
        }

        const result: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== i + 1) {
                result.push(i + 1);
            }
        }

        return result;
    }

    function swapUntilEveryThingInOrder(nums: number[], l: number) {
        if (nums[l] === l + 1 || nums[l] === nums[nums[l] - 1]) {
            return;
        }

        const targetIndex = nums[l] - 1;
        const temp = nums[targetIndex];
        nums[targetIndex] = nums[l];
        nums[l] = temp;
        swapUntilEveryThingInOrder(nums, l);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
