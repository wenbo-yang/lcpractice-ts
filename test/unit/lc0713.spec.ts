xdescribe('leetcode 713: num of subarray product less than k', () => {
    function numSubarrayProductLessThanK(nums: number[], k: number): number {
        // sliding window
        // such that product l to r  >= k then l--, 

        let l = 0;
        let r = 0;
        let currentProduct = 1;        
        const arraySet = new Set<string>();
        while (r < nums.length) {
            if (currentProduct < k) {
                currentProduct *= nums[r];
                r++;
                continue;
            }
            
            if (currentProduct >= k) {
                let length = 0;
                while(length < r - l) {
                    let i = l;
                    while (i + length < r) {
                        arraySet.add([i, i + length].join(''));
                    }
                    length++;
                }

                l--;
                currentProduct /= nums[l];
            }
        }

        return arraySet.size;
    };

    function numSubarrayProductLessThanKAlt(nums: number[], k: number): number {
        let ans = 0;
        for (let i = 0, j = 0, s = 1; i < nums.length; ++i) {
            s *= nums[i];
            while (j <= i && s >= k) {
                s /= nums[j++];
            }
            ans += i - j + 1;
        }
        return ans;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
