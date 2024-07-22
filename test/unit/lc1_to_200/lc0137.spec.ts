xdescribe('leetcode 137: single numbers', () => {
    function singleNumber(nums: number[]): number {
        // [ 1 2 3 1 2 3 1 2 3 6]
        // [ ]
        // bitwise comparison

        let ans = 0;
        for (let s = 0; s < 32; ++s) {
            let mask = 1 << s;
            let sum = 0;
            for (let x of nums) if (x & mask) ++sum;
            if (sum % 3) ans |= mask;
        }
        return ans;
    }

    it('test case 1 Input [1, 2, 3, 1, 2, 3, 1, 2, 3, 6] , output 6 ', () => {
        const nums = [1, 2, 3, 1, 2, 3, 1, 2, 3, 6];
        const result = singleNumber(nums);
        expect(result).toEqual(6);
    });
});
