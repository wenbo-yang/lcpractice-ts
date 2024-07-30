xdescribe('leetcode 121: best time to buy and sell stock', () => {
    function maxProfit(prices: number[]): number {
        let minPrices: number[] = [prices[0]];
        let maxProfit: number[] = [0];

        for (let i = 1; i < prices.length; i++) {
            minPrices.push(Math.min(prices[i], minPrices[i - 1]));
            maxProfit.push(Math.max(prices[i] - minPrices[i], maxProfit[i - 1]));
        }

        return Math.max(...maxProfit);
    }

    it('test case 1 prices = [7,1,5,3,6,4], output 5', () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const result = maxProfit(prices);

        expect(result).toEqual(5);
    });
});
