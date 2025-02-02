xdescribe('leetcode 1371: find the lognest substring containing vowels in even counts', () => {
    function findTheLongestSubstring(s: string): number {
        const vowels: string = "aeiou";
        let firstOccurrence: number[] = new Array(32).fill(Number.MAX_SAFE_INTEGER);
        firstOccurrence[0] = -1;
        let currentState: number = 0;
    
        let longestSubstringLength: number = 0;
    
        for (let i = 0; i < s.length; i++) {
            for (let j = 0; j < vowels.length; j++) {
                if (s[i] === vowels[j]) {
                    currentState ^= (1 << j);
                }
            }
            if (firstOccurrence[currentState] === Number.MAX_SAFE_INTEGER) {
                firstOccurrence[currentState] = i;
            }
        
            longestSubstringLength = Math.max(longestSubstringLength, i - firstOccurrence[currentState]);
        }
    
        return longestSubstringLength;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
