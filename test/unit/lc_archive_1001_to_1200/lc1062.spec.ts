xdescribe('leetcode 1062: longest repeating substring', () => {
    function longestRepeatingSubstring(s: string): number {
        const length = s.length; 
        const dp: number[][] = Array.from({ length }, () => Array(length).fill(0));
        let longest = 0; 
    
        for (let i = 0; i < length; i++) {
            for (let j = i + 1; j < length; j++) {
                if (s[i] === s[j]) {
                    dp[i][j] = (i > 0) ? dp[i - 1][j - 1] + 1 : 1;
                    longest = Math.max(longest, dp[i][j]);
                }
            }
        }
        return longest;
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
