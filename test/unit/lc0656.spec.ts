xdescribe('leetcode 656: coin path', () => {
    function cheapestJump(coins: number[], maxJump: number): number[] {
        //  1                     2             4           -1     2
        // {cost: 1, path: [1]} 

        const df : {cost: number, path: number[]}[] = new Array<{cost: number, path: number[]}>(coins.length).fill({cost: Number.MAX_SAFE_INTEGER, path:[]});
        df[0] = {cost: coins[0], path: [1]} 

        for (let i = 0; i < coins.length - 1; i++) {
            for (let j = 1; j <= maxJump; j++) {
                if (i + j >= coins.length) {
                    break;
                }

                if (coins[i + j] === -1) {
                    continue;
                }

                const cost = df[i].cost + coins[i + j];
                if (df[i + j].cost < cost) {
                    const path = Array.from(df[i].path);
                    path.push(i + j + 1);
                }
            }
        }

        return df[df.length - 1].path
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
