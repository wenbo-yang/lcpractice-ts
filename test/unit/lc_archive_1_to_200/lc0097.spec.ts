xdescribe('leetcode 97: Interleaving String', () => {
    function isInterleave(s1: string, s2: string, s3: string): boolean {
        let l1 = s1.length;
        let l2 = s2.length;
        let l3 = s3.length;
        if (l1 + l2 != l3) return false;
        // df[i][j]: whehter s3[0:i+j] is a interleva of s1[0:i] and s2[0:j]
        const df = new Array<Array<boolean>>(l1 + 1).fill([]).map((row) => new Array<boolean>(l2 + 1).fill(false));
        df[0][0] = true;
        for (let i = 0; i <= l1; ++i)
            for (let j = 0; j <= l2; ++j) {
                if (i > 0) df[i][j] = df[i][j] || (df[i - 1][j] && s1[i - 1] == s3[i + j - 1]);
                if (j > 0) df[i][j] = df[i][j] || (df[i][j - 1] && s2[j - 1] == s3[i + j - 1]);
            }
        return df[l1][l2];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
