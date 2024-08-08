xdescribe('leetcode 322: description', () => {
    function coinChangeDfs(coins: number[], amount: number): number {
        if (amount < 0) {
            return -1;
        }

        if (amount === 0) {
            return 0;
        }

        const results: number[] = [];
        
        for (let i = 0; i < coins.length; i++) {
            const result = coinChangeDfs(coins, amount - coins[i]);
            
            if (result !== -1) {
                results.push(result + 1);
            }
        }

        return Math.min(...results);
    };

    function coinChangeDP(coins: number[], amount: number): number {
        const df = new Array<number>(amount).fill(-1);
        coins.sort((a,b) => a - b);
        
        for(let i = 0; i < coins.length; i++) {
            df[coins[i]] = 1;
        }

        for (let i = 0; i < df.length; i++) {
            const min: number[] = [];
            for(let j = 0; j < coins.length; j++) {
                const prev = (df[i - coins[j]] || -1)

                if (prev !== -1) {
                    min.push(prev + 1)
                }
            }

            if (min.length !== 0) {
                df[i] = Math.min(...min);
            }
        }

        return df[df.length - 1];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});