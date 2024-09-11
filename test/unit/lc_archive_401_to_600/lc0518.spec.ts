xdescribe('leetcode 518: coin change II', () => {
    function change(amount: number, coins: number[]): number {
        if (coins.length === 0) {
            return 0;
        }

        coins.sort((a, b) => a - b);

        const df = new Array<number>(amount + 1).fill(0);

        initializeDf(df, amount, coins[0]);
        coins.shift();

        for (const coin of coins) {
            let numberOfCoins = 1;
            while (coin * numberOfCoins <= amount) {
                for (let i = 0; i < df.length; i++) {
                    if (i === coin * numberOfCoins) {
                        df[i]++;
                    }

                    if (df[i] !== 0 && i + coin * numberOfCoins <= amount) {
                        df[i + coin * numberOfCoins]++;
                    }

                    if (df[i] === 0) {
                        continue;
                    }
                }
                numberOfCoins++;
            }
        }

        return df[df.length - 1];
    }

    function initializeDf(df: number[], amount: number, smallestCoin: number) {
        let sum = 0;

        while (sum <= amount) {
            sum += smallestCoin;
            df[sum] = df[sum]++;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
