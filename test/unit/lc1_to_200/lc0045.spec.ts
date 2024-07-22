xdescribe('leetcode 45 : Jump Game II', () => {
    function jump(nums: number[]): number {
        const df = Array<number>(nums.length).fill(Number.MAX_SAFE_INTEGER);
        initializeDF(nums, df);
        return df[df.length - 1];
    }

    function initializeDF(nums: number[], df: number[]): void {
        df[0] = 0;

        for (let i = 0; i < nums.length - 1; i++) {
            const forward = nums[i];
            for (let j = i + 1; j <= forward + i; j++) {
                if (j > df.length - 1) {
                    break;
                }
                df[j] = Math.min(df[j], df[i] + 1);
            }
        }
    }

    function jumpGreedy(nums: number[]): number {
        let steps: number = 0;
        let near: number = 0;
        let far: number = 0;
        for (let i = 0; i < nums.length; ++i) {
            if (i > near) {
                steps++;
                near = far;
            }
            far = Math.max(far, i + nums[i]);
        }

        return steps;
    }

    it('test case 1 nums = [2,3,1,1,4], output 2 ', () => {
        const nums = [2, 3, 1, 1, 4];
        const result = jump(nums);

        expect(result).toEqual(2);
    });
});
