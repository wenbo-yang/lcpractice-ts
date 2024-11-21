xdescribe('leetcode 905: sort array by parity', () => {
    function sortArrayByParity(nums: number[]): number[] {
        // 3, 1, 2, 4
        // l        r
        
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            while (nums[l] % 2 === 1) {
                l++;
            }
            while (nums[r] % 2 === 0) {
                r--;
            }

            const temp = nums[r];
            nums[r] = nums[l];
            nums[l] = temp;
        }

        return nums;

    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
