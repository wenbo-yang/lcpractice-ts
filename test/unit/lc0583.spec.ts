xdescribe('leetcode 583: delete operation for two strings', () => {
    function minDistance(word1: string, word2: string): number {
        const df = new Array<Array<number>>(word1.length + 1).fill([]).map(r => new Array<number>(word2.length + 1).fill(0));

        for (let i = 1; i <= word1.length; i++) {
            for (let j = 1; j <= word2.length; j++) {
                if (word1[i - 1] === word2[j - 1]) {
                    df[i][j] = df[i-1][j-1]  + 1;
                }
                else {
                    df[i][j] = Math.max(df[i - 1][j], df[i][j - 1]);
                }
            }
        }

        return word1.length + word2.length - 2 * df[word1.length][word2.length]
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
