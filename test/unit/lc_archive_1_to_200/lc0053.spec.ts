xdescribe('leetcode 53: Maximum Subarray', () => {
    function maxSubArray(nums: number[]): number {
        const df = new Array<number>(nums.length).fill(0);
        df[0] = nums[0];
        let currentMax = df[0];

        for (let i = 1; i < nums.length; i++) {
            df[i] = Math.max(df[i - 1] + nums[i], nums[i]);

            currentMax = Math.max(df[i], currentMax);
        }

        return currentMax;
    }

    it('test case 1 Input: nums = [-2,1,-3,4,-1,2,1,-5,4], output 6', () => {
        const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

        const result = maxSubArray(nums);

        expect(result).toEqual(6);
    });

    it('test case 2 Input: nums =[5,4,-1,7,8] , output 23', () => {
        const nums = [5, 4, -1, 7, 8];

        const result = maxSubArray(nums);

        expect(result).toEqual(23);
    });
});
