xdescribe('leetcode 485: consecutive 1', () => {
    function findMaxConsecutiveOnes(nums: number[]): number {
        let l = 0;
        let r = 1;
        let max = 0;
        while (r < nums.length) {
            if (nums[r] === 1 && nums[l] === 0) {
                l = r;
            }

            if (nums[r] === 0 && nums[l] === 1) {
                max = Math.max(max, r - l);
                l = r;
            }

            r++;
        }

        return Math.max(max, nums[l] === 1 ? r - l : 0);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
