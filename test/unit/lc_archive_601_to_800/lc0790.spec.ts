xdescribe('leetcode 790: domino and tromino tiling', () => {
    function numTilings(n: number): number {
        const kMod = 1000000007;
        const df = new Array<Array<number>>(n + 1).fill([]).map(r => new Array<number>(3).fill(0));
        
        df[0][0] = df[1][0] = 1;
        for (let i = 2; i <= n; i++) {
            df[i][0] = (df[i - 1][0] + df[i - 2][0] + df[i - 1][1] + df[i - 1][2]) % kMod;
            df[i][1] = (df[i - 2][0] + df[i - 1][2]) % kMod;
            df[i][2] = (df[i - 2][0] + df[i - 1][1]) % kMod;
        }
    
        return df[n][0];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
