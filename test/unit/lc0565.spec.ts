xdescribe('leetcode 565: description', () => {
    function arrayNesting(nums: number[]): number {
        let ans = 0;
        let n = nums.length;
        for (let i = 0; i < n; ++i) {
            let cnt = 0;
            let j = i;
            while (nums[j] < n) {
                let temp = nums[j];
                nums[j] = n;
                j = temp;
                ++cnt;
            }
            ans = Math.max(ans, cnt);
        }
        return ans;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
