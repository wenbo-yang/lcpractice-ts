xdescribe('leetcode 336: palindrome pairs', () => {
    function palindromePairs(words: string[]): number[][] {
        const results: number[][] = [];
        
        for(let i = 0; i < words.length; i++) {
            for (let j = 0; j< words.length; j++) {
                if (i === j) {
                    continue;
                }

                if (isPalindrome(words[i] + words[j])) {
                    results.push([i, j]);
                }
            }
        }

        return results;
    };

    function isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        while(l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
        }

        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});