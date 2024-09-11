xdescribe('leetcode 442: find all duplicates', () => {
    function findDuplicates(nums: number[]): number[] {
        const ans: number[] = [];
        for (const num of nums) {
            let index = Math.abs(num) - 1;
            if (nums[index] < 0) ans.push(index + 1);
            nums[index] *= -1;
        }
        return ans;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
