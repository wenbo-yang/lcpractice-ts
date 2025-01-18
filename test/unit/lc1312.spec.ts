xdescribe('leetcode 1312: minimum insertions steps to make a string palindrome', () => {
    function minInsertions(s: string): number {
        const n: number = s.length;
        const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
    
        for (let startIdx = n - 2; startIdx >= 0; --startIdx) { 
            for (let endIdx = startIdx + 1; endIdx < n; ++endIdx) {
                if (s[startIdx] === s[endIdx]) {
                    dp[startIdx][endIdx] = dp[startIdx + 1][endIdx - 1];
                } else {
                    dp[startIdx][endIdx] = Math.min(dp[startIdx + 1][endIdx], dp[startIdx][endIdx - 1]) + 1;
                }
            }
        }
    
        return dp[0][n - 1];
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
