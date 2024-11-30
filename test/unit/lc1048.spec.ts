xdescribe('leetcode 1048: longest string chain', () => {
    function longestStrChain(words: string[]): number {
        words.sort((a, b) => a.length - b.length);
        const n = words.length;
        const dp = new Map<string, number>();
        let ans = 0;
        for (const currentWord of words) {
            dp.set(currentWord, 1);
            for (let j = 0; j < currentWord.length; j++) {
                const previousWord = currentWord.slice(0, j) + currentWord.slice(j + 1);
            
                dp[currentWord] = Math.max(
                    dp.get(currentWord) || 0,
                    (dp.get(previousWord) || 0) + 1
                );
            }
            ans = Math.max(ans, dp[currentWord]);
        }
        return ans;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
