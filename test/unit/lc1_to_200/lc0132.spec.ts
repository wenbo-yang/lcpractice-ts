xdescribe('leetcode 132: partition palidrome with cuts', () => {
    function minCut(s: string): number {
        let validPalindromeDf = new Array<Array<boolean>>(s.length).fill([]).map((r) => new Array<boolean>(s.length).fill(true));
        let cutsDf = new Array<number>(s.length).fill(s.length - 1);

        for (let l = 2; l <= s.length; ++l) {
            for (let i = 0, j = i + l - 1; j < s.length; i++, j++) {
                validPalindromeDf[i][j] = s[i] === s[j] && validPalindromeDf[i + 1][j - 1];
            }
        }

        for (let i = 0; i < s.length; i++) {
            if (validPalindromeDf[0][i]) {
                cutsDf[i] = 0;
                continue;
            }

            for (let j = 0; j < i; j++) {
                if (validPalindromeDf[j + 1][i]) {
                    cutsDf[i] = Math.min(cutsDf[i], cutsDf[j] + 1);
                }
            }
        }
        return cutsDf[s.length - 1];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
