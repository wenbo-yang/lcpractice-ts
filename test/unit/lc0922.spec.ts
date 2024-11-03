xdescribe('leetcode 922: sort array by parity', () => {
    function sortArrayByParityII(nums: number[]): number[] {
        let o = 0;
        let e = 0;

        while (o < nums.length || e < nums.length) {
            while(o % 2 === nums[o] % 2) { // out of place odd value
                o++;
            }

            if (nums[o] % 2 === 0 && o % 2 === 1) {
                while(e % 2 === nums[e] % 2) { // out of place even value
                    e++;
                }

                if (nums[e] % 2 === 1 && e % 2 === 0) {
                    const temp = nums[e];
                    nums[e] = nums[o];
                    nums[o] = temp;
                }
                else {
                    e++;
                }
            }
            else {
                e = o;
                o++;
                continue;
            }

        }

        return nums;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
