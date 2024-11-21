xdescribe('leetcode 977: squares of sorted array', () => {
    function sortedSquares(nums: number[]): number[] {
        const n: number = nums.length;
        const res: number[] = new Array(n);
        for (let i: number = 0, j: number = n - 1, k: number = n - 1; i <= j; ) {
            if (nums[i] * nums[i] > nums[j] * nums[j]) {
                res[k--] = nums[i] * nums[i];
                ++i;
            } else {
                res[k--] = nums[j] * nums[j];
                --j;
            }
        }
      
        return res;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
