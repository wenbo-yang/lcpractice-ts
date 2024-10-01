xdescribe('leetcode 719: find k-th smallest pair distance', () => {
    function smallestDistancePair(nums: number[], k: number): number {
        // [1 1 1 15]
        //   0  0 14
        //     0  14
        //        14
        nums.sort((a,b) => a - b);
        let n = nums.length;
        let l = 0;
        let r = nums[nums.length - 1] - nums[0];

        while (l <= r) {
            let cnt = 0;
            let j = 0;
            let m = Math.floor((r + l) / 2);
            for (let i = 0; i < n; ++i) {
                while (j < n && nums[j] - nums[i] <= m) ++j;
                cnt += j - i - 1;
            }
            cnt >= k ? r = m - 1 : l = m + 1;
        }        
        return l;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
