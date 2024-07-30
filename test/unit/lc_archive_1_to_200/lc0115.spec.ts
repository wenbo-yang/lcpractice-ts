xdescribe('leetcode 115: Distinct Subsequences', () => {
    function numDistinct(s: string, t: string): number {
        //   b a b g b a g
        // b 1 1 2 2 3 3 3
        // a 0 1 1 1 1 4 4
        // g 0 0 0 1 1 1 5

        s = s.slice(s.indexOf(t[0]));
        if (t.length > s.length) {
            return 0;
        }

        const df = new Array<Array<number>>(t.length).fill([]).map((r) => new Array<number>(s.length).fill(0));
        initializeDf(s, t, df);

        for (let i = 1; i < df.length; i++) {
            for (let j = 1; j < df[0].length; j++) {
                if (t[i] === s[j]) {
                    df[i][j] = df[i - 1][j - 1] + df[i][j - 1];
                } else {
                    df[i][j] = df[i][j - 1];
                }
            }
        }

        return df[df.length - 1][df[0].length - 1];
    }

    function initializeDf(s: string, t: string, df: number[][]) {
        df[0][0] = 1;

        for (let j = 1; j < df[0].length; j++) {
            if (t[0] === s[j]) {
                df[0][j] = df[0][j - 1] + 1;
            } else {
                df[0][j] = df[0][j - 1];
            }
        }
    }

    it('test case 1 Input: s = "babgbag", t = "bag", output 5 ', () => {
        const s = 'babgbag';
        const t = 'bag';

        const result = numDistinct(s, t);

        expect(result).toEqual(5);
    });

    it('test case 2 Input: s = "rabbbit", t = "rabbit", output 3 ', () => {
        const s = 'rabbbit';
        const t = 'rabbit';

        const result = numDistinct(s, t);

        expect(result).toEqual(3);
    });
});
