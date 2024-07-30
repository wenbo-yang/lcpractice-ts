xdescribe('leetcode 248: count total number of strobogrammatic numbers', () => {
    // idea still dfs but add in for all n = lowerbound; to n = upper
    function countStrobogrammaticNumbers(lower: string, upper: string): number {
        const results = new Set<string>();
        let nLower = lower.length;
        let nUpper = upper.length;

        const map: string[][] = [
            ['8', '8'],
            ['6', '9'],
            ['9', '6'],
            ['2', '5'],
            ['5', '2'],
            ['0', '0'],
        ];

        for (let n = nLower; n <= nUpper; n++) {
            for (const r of map) {
                const current = n % 2 === 0 ? '' : r[0];
                const remaining: number = n % 2 === 0 ? n : n - 1;
                allStrobogrammaticNumbersHelper(current, remaining, map, results);
            }
        }

        return Array.from(results.values()).filter((s) => Number(s) >= Number(lower) && Number(s) <= Number(upper)).length;
    }

    function allStrobogrammaticNumbersHelper(current: string, remaining: number, map: string[][], results: Set<string>) {
        if (remaining === 0) {
            results.add(current);
        }

        for (const r of map) {
            if (remaining === 2 && r[0] === '0') {
                continue;
            }
            allStrobogrammaticNumbersHelper(r[0] + current + r[1], remaining - 2, map, results);
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
