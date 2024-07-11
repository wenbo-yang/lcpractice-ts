xdescribe('leetcode 5: longest palidromic substring', () => {
    // dynamic programming
    function longestPalindromeMems(s: string): string {
        const mems = new Set<number>();
        let longestPalindrome = { l: -1, r: -1, length: 0 };
        let currentPalindromeLength = 1;
        while (currentPalindromeLength <= s.length) {
            let l = 0;
            let r = l + currentPalindromeLength - 1;
            while (r < s.length) {
                if (isPalindrome(l, r, s, mems)) {
                    if (currentPalindromeLength > longestPalindrome.length) {
                        longestPalindrome = { l, r, length: currentPalindromeLength };
                    }
                }

                l++;
                r++;
            }

            currentPalindromeLength++;
        }

        return s.substring(longestPalindrome.l, longestPalindrome.r + 1);
    }

    function isPalindrome(l: number, r: number, s: string, mems: Set<number>): boolean {
        const offset = 100000;
        if (l === r || (l === r - 1 && s.charAt(r) === s.charAt(l)) || (s.charAt(l) === s.charAt(r) && mems.has((r - 1) * offset + (l + 1)))) {
            mems.add(r * offset + l);
            return true;
        }
        return false;
    }

    function longestPalindromeDP(s: string): string {
        const df = createMat(s.length, s.length);
        const longest = calculateDf(df, s);

        return s.substring(longest.l, longest.r + 1);
    }

    function createMat(r: number, c: number): boolean[][] {
        const mat: boolean[][] = Array<Array<boolean>>(r)
            .fill([])
            .map(() => Array<boolean>(c).fill(false));
        return mat;
    }

    function calculateDf(df: boolean[][], s: string): { l: number; r: number; length: number } {
        let longest = { l: -1, r: -1, length: 0 };

        for (let i = 0; i < df.length; i++) {
            df[i][i] = true;
            longest = { l: i, r: i, length: 1 };
        }

        for (let i = 0; i < df.length; i++) {
            let j = i + 1;
            if (j < df.length) {
                df[i][j] = s.charAt(i) === s.charAt(j);

                if (df[i][j]) {
                    longest = { l: i, r: j, length: 2 };
                }
            }
        }

        let currentWindow = 3;
        while (currentWindow <= s.length) {
            let l = 0;
            let r = l + currentWindow - 1;
            while (r < s.length) {
                df[l][r] = s.charAt(l) === s.charAt(r) && df[l + 1][r - 1];
                if (df[l][r]) {
                    longest = { l, r, length: currentWindow };
                }

                l++;
                r++;
            }
            currentWindow++;
        }

        return longest;
    }

    it('test case 1 s = "babad", output bab or aba', () => {
        const s = 'babad';
        const output = longestPalindromeMems(s);

        expect(output).toEqual('bab');
    });

    it('test case 2 cbbd Output: bb', () => {
        const s = 'cbbd';
        const output = longestPalindromeMems(s);

        expect(output).toEqual('bb');
    });

    it('test case 3 dp s = "babad", output bab or aba', () => {
        const s = 'babad';
        const output = longestPalindromeDP(s);

        expect(output === 'aba' || output === 'bab').toBe(true);
    });

    it('test case 4 dp cbbd Output: bb', () => {
        const s = 'cbbd';
        const output = longestPalindromeDP(s);

        expect(output).toEqual('bb');
    });
});
