xdescribe('leetcode 96: unique binary search trees ', () => {
    function numTrees(n: number): number {
        const df = new Array<number>(n + 1).fill(0);
        df[0] = 1;
        for (let i = 1; i < df.length; i++) {
            for (let j = 0; j < i; j++) {
                df[i] += df[j] * df[i - j - 1];
            }
        }

        return df[n];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
