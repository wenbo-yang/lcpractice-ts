xdescribe('leetcode 72: edit distance', () => {
    function minDistance(word1: string, word2: string): number {
        const df = generateDf(word1.length + 1, word2.length + 1);

        initializeDf(df);

        for (let i = 1; i <= df.length; i++) {
            for (let j = 1; j <= df[0].length; j++) {
                const ops = word1.charAt(i - 1) === word2.charAt(j - 1) ? 0 : 1;
                df[i][j] = Math.min(df[i - 1][j - 1] + ops, Math.min(df[i][j - 1], df[i - 1][j] + 1));
            }
        }

        return df[word1.length][word2.length];
    }

    function initializeDf(df: number[][]) {
        for (let i = 0; i < df.length; i++) {
            df[i][0] = i;
        }

        for (let j = 0; j < df[0].length; j++) {
            df[0][j] = j;
        }
    }

    function generateDf(row: number, col: number) {
        return new Array<Array<number>>(row).fill([]).map((r) => new Array<number>(col).fill(0));
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
