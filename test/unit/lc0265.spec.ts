xdescribe('leetcode 265: paint houses ', () => {
    function minCost(costs: number[][]): number {
        if(costs != null && costs.length == 0) {
            return 0;
        }

        const dp = costs;
        let min1 = -1, min2 = -1;

        for (let i = 0; i < dp.length; i++) {
            let last1 = min1;
            let last2 = min2;
            min1 = -1; min2 = -1;
            for (let j = 0; j < dp[i].length; j++) {
                if (j != last1) {
                    dp[i][j] += last1 < 0 ? 0 : dp[i - 1][last1];
                } else {
                    dp[i][j] += last2 < 0 ? 0 : dp[i - 1][last2];
                }

                if (min1 < 0 || dp[i][j] < dp[i][min1]) {
                    min2 = min1;
                    min1 = j;
                } else if (min2 < 0 || dp[i][j] < dp[i][min2]) {
                    min2 = j;
                }
            }
        }

        return dp[dp.length - 1][min1];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
