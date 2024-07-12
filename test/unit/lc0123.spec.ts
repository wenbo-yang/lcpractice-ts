xdescribe('leetcode 123: best time to buy and sell stock 2 buys and sells', () => {
    function maxProfit2BuysAndSells(prices: number[]): number {
        // monotonic increasing range
        let l: number = 0;
        let r: number = 1;
        const maxTwoProfits: number[] = [0, 0];

        while (r < prices.length) {
            if (prices[r] < prices[r - 1]) {
                keepProfit(maxTwoProfits, prices, l, r - 1);
                l = r;
            }

            r++;
        }

        if (l === 0 && r === prices.length) {
            return prices[r - 1] - prices[l];
        }

        return maxTwoProfits[0] + maxTwoProfits[1];
    }

    function keepProfit(maxTwoProfits: number[], prices: number[], l: number, r: number) {
        const profit = prices[r] - prices[l];
        if (profit > maxTwoProfits[1]) {
            maxTwoProfits[0] = maxTwoProfits[1];
            maxTwoProfits[1] = profit;
        } else if (profit > maxTwoProfits[0]) {
            maxTwoProfits[0] = profit;
        }
    }

    it('test case 1 prices = [7,1,5,3,6,4], output 5', () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const result = maxProfit2BuysAndSells(prices);

        expect(result).toEqual(7);
    });

    it('test case 2 prices = [1, 2 ,3 ,4 ,5], output 4', () => {
        const prices = [1, 2, 3, 4, 5];
        const result = maxProfit2BuysAndSells(prices);

        expect(result).toEqual(4);
    });

    it('test case 3 prices = [7,6,4,3,1], output 0', () => {
        const prices = [7, 6, 4, 3, 1];
        const result = maxProfit2BuysAndSells(prices);

        expect(result).toEqual(0);
    });
});
