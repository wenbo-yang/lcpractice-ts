xdescribe('leetcode 746: min cost', () => {
    function minCostClimbingStairs(cost: number[]): number {
        const df = new Array<number>(cost.length + 3);

        for (let i = 2; i < df.length; i++) {
            df[i] = cost[i - 2] + Math.min(df[i - 1], df[i - 2]);
        }

        return df[df.length - 1];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
