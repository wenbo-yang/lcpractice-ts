xdescribe('leetcode 188: best time to buy and sell stocks iv k buys and sells', () => {
    function maxProfit(k: number, prices: number[]): number {
        const balance = new Array<number>(k + 1).fill(Number.MIN_SAFE_INTEGER);
        const profit = new Array<number>(k + 1).fill(0);
        for (let i = 0; i < prices.length; i++)
            for (let j = 1; j <= k; j++) {
                balance[j] = Math.max(balance[j], profit[j - 1] - prices[i]);
                profit[j] = Math.max(profit[j], balance[j] + prices[i]);
            }
        return profit[k];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
