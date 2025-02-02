xdescribe('leetcode 1320: minimum distance to type a word using two fingers', () => {
    function calcDistance(a: number, b: number): number {
        const x1: number = Math.floor(a / 6), y1: number = a % 6;
        const x2: number = Math.floor(b / 6), y2: number = b % 6;
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    function minimumDistance(word: string): number {
        const n: number = word.length;
        const INF: number = 1 << 30;

        let dp: number[][][] = Array.from({ length: n }, () =>
            Array.from({ length: 26 }, () => Array(26).fill(INF))
        );

        for (let j = 0; j < 26; j++) {
            dp[0][word.charCodeAt(0) - 'A'.charCodeAt(0)][j] = 0;
            dp[0][j][word.charCodeAt(0) - 'A'.charCodeAt(0)] = 0;
        }

        for (let i = 1; i < n; i++) {
            const prevChar: number = word.charCodeAt(i - 1) - 'A'.charCodeAt(0);
            const curChar: number = word.charCodeAt(i) - 'A'.charCodeAt(0);
            const distance: number = calcDistance(prevChar, curChar);

            for (let j = 0; j < 26; j++) {
                dp[i][curChar][j] = Math.min(dp[i][curChar][j], dp[i - 1][prevChar][j] + distance);
                dp[i][j][curChar] = Math.min(dp[i][j][curChar], dp[i - 1][j][prevChar] + distance);

                if (j === prevChar) {
                    for (let k = 0; k < 26; k++) {
                        const temp: number = calcDistance(k, curChar);
                        dp[i][curChar][j] = Math.min(dp[i][curChar][j], dp[i - 1][k][prevChar] + temp);
                        dp[i][j][curChar] = Math.min(dp[i][j][curChar], dp[i - 1][prevChar][k] + temp);
                    }
                }
            }
        }

        let answer: number = INF;
        for (let j = 0; j < 26; j++) {
            answer = Math.min(answer, dp[n - 1][word.charCodeAt(n - 1) - 'A'.charCodeAt(0)][j]);
            answer = Math.min(answer, dp[n - 1][j][word.charCodeAt(n - 1) - 'A'.charCodeAt(0)]);
        }

        return answer;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
