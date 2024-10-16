xdescribe('leetcode 647: longest continuous increasing subsequence', () => {
    function findLengthOfLCIS(nums: number[]): number {
        let l = 0; 
        let r = 1;
        let max = 0;

        while (r < nums.length) {
            if (nums[r] > nums[r - 1]) {
                r++;
            }
            else {
                max = Math.max(r - l, max);
                l = r;
                r++;
            }
        }

        max = Math.max(r - l, max);
        return max;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
