xdescribe('leetcode 1099: description', () => {
    function twoSumLessThanK(nums: number[], k: number): number {
        nums.sort((a,b) => a - b);
        let l = 0;
        let r = nums.length - 1;
        let currentMin = Number.MIN_SAFE_INTEGER;
        while (l < r) {
            const sum = nums[l] + nums[r];
            if (sum > currentMin && sum < k) {
                currentMin = sum;
            }

            if (sum >= k) {
                r--;
            }

            if (sum < k) {
                l++
            } 
        }

        return currentMin === Number.MIN_SAFE_INTEGER ? -1 : currentMin;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
