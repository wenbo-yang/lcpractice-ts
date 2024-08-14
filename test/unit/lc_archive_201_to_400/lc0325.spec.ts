xdescribe('leetcode 325: maximum size sub array equals k', () => {
    function maxWindow(nums: number[], k: number): number {
        // range sum;
        const df = new Array<number>(nums.length);
        df[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            df[i] = df[i - 1] + nums[i];
        }

        // df[i] = sum(num[0] to i);
        //                      sum,  index only the max index
        const sumMap = new Map<number, number>();

        for (let i = 0; i < df.length; i++) {
            sumMap.set(df[i], i);
        }

        let currentMax = 0;
        for (let i = 0; i < df.length; i++) {
            const target = k - nums[i] + df[i];
            const sumIndex = sumMap.get(target) || -1;

            if (sumIndex > i) {
                currentMax = Math.max(currentMax, sumIndex - i + 1);
            }
        }

        return currentMax;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
