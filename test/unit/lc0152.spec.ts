xdescribe('leetcode 152: max product subarray', () => {
    function maxProduct(nums: number[]): number {
        //   2 2 0 -2 -4
        //   0 1 2  3  4
        // 0 2,4 0  0  0
        // 1 N 2 0  0  0
        // 2     0  0  0
        // 3        -2 6
        // 4          -4

        const df = new Array<Array<number>>(nums.length).fill([]).map((r) => new Array<number>(nums.length).fill(Number.MIN_SAFE_INTEGER));

        initializeDF(df, nums);

        let currentMax = Math.max(...nums);

        for (let i = 0; i < df.length; i++) {
            for (let j = i + 1; j < df[0].length; j++) {
                df[i][j] = Math.max(df[i][j - 1] * nums[j], nums[j]);
                currentMax = Math.max(currentMax, df[i][j]);
            }
        }

        return currentMax;
    }

    function initializeDF(df: number[][], nums: number[]) {
        for (let i = 0; i < nums.length; i++) {
            df[i][i] = nums[i];
        }
    }

    it('test case 1 Input [2 2 0 -2 -4]:, output 8 ', () => {
        const nums = [2, 2, 0, -2, -4];

        const result = maxProduct(nums);

        expect(result).toEqual(8);
    });
});
