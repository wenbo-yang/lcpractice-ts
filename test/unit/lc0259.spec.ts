xdescribe('leetcode 259: description', () => {
    function threeSumSmaller(nums: number[], target: number): number {
        nums.sort((a, b) => a - b);
        let ans = 0;
        for (let i = 0, n = nums.length; i < n; ++i) {
            let j = i + 1;
            let k = n - 1;
            while (j < k) {
                const s = nums[i] + nums[j] + nums[k];
                if (s >= target) {
                    --k;
                } else {
                    ans += k - j;
                    ++j;
                }
            }
        }
        return ans;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
