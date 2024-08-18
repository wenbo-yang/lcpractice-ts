xdescribe('leetcode 467: uniq subscripts in wrap around string', () => {
    function findSubstringInWraproundString(s: string): number {
        const n = s.length;
        const dp = new Array(26).fill(0);
        let cur = 1;
        dp[s.charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
        for (let i = 1; i < n; i++) {
            if ((s.charCodeAt(i) - s.charCodeAt(i - 1) + 25) % 26 == 0) {
                cur++;
            } else {
                cur = 1;
            }
            const index = s.charCodeAt(i) - 'a'.charCodeAt(0);
            dp[index] = Math.max(dp[index], cur);
        }
        return dp.reduce((a, b) => a + b);
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
