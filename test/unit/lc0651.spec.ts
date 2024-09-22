xdescribe('leetcode 651: 4 keys keyboard', () => {
    function fourKeys(n: number): number {

        // n = 1: A 
        // n = 2: AA
        // n = 3: AAA
        // n = 4: AAAA (4xA) or A + acv => AA
        // n = 5: AAAAA (5xA) or AA + acv => AAAA
        // n = 6: AAAAAA (6xA) or AAA + acv => AAAAAA
        // n = 7: AAAAAAAAA => AAA + acv + v => 6 + 3 => AAAAAAA
        // n = 8: (8xA) or 5 + acv => 10xA or 4 + acv + v => 8 + 4 => 12xA or 3 + acv + v + v  => 6 + 3 + 3 (12A) 
        // n = 9: (9xA) or 6 + acv => 12A or 5 + acv + v => 10 + 5 = 15A or 4 + acv + v + v => 8 + 4 + 4 => 16A or 3 + acv + acv => 6 + 6 (12A)

        if (n <= 6) {
            return n;
        }
        let index = 0;
        const df = new Array<number>(n + 1).map(n => index++);

        for (let i = 7; i <= n; i++) {
            const acv = df[n-3] * 2;
            const acvv = df[n-4] * 2 + df[n-4];
            const acvvv = df[n-5] * 2 + df[n - 5] + df[n - 5];

            df[i] = Math.min(acv, acvv, acvvv, df[i]);
        }

        return df[n];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
