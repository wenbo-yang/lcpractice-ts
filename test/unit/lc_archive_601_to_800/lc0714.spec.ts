xdescribe('leetcode 714: max profit with transaction fee', () => {
    function maxProfit(prices: number[], fee: number): number {
        // [1 3 7 5 10 3]
        //  6 - 3 = 3 
        // 10 - 5 - 3 = 2
        //  1 10 9 -3 = 6

        //    [1     3       7     5      10        3]
        // 1 [ -3    -1      3     3      6        -1]
        // 3 [       -3      1     -1     4        -3]
        // 7 [                                       ]
        // 5 [                                       ]
        // 10[                                       ] 
        // 3[                                        ]

        
        const df = new Array<Array<number>>(prices.length + 1).fill([]).map(r => new Array<number>().fill(-fee));

        initialize(df, prices, fee);

        let max = 0;
        for (let i = 1; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                df[i][j] = Math.max(Math.max(df[i - 1][i - 1], 0) + prices[j] - prices[i] -3, df[i][j - 1]);
                max = Math.max(max, df[i][j]);
            }
        }

        return max;
    };

    function initialize(df: number[][], prices: number[], fee: number) {
        for (let j = 1; j < df[0].length; j++) {
            df[0][j] = Math.max(prices[j] - prices[0] - fee, df[0][j - 1]);
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


