xdescribe('leetcode 122: best time to buy and sell stock multiple buys and sells', () => {
    function maxProfitMultipleBuysAndSells(prices: number[]): number {
        let l = 0;
        let r = 1;
        let profit = 0;
        while (r < prices.length) {
            if (prices[r] < prices[l]) {
                l = r;
            } else {
                profit += prices[r] - prices[l];
                l = r;
            }

            r++;
        }

        return profit;
    }

    // function maxProfitMultipleBuysAndSellsAnother(prices: number[]): number {
    //     let profit = 0;
    //     for(let i = 1; i < prices.length; i++) {
    //         profit += Math.max(0, prices[i] - prices[i - 1])
    //     }

    //     return profit;

    // };

    it('test case 1 prices = [7,1,5,3,6,4], output 5', () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const result = maxProfitMultipleBuysAndSells(prices);

        expect(result).toEqual(7);
    });
});
