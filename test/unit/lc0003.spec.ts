
xdescribe('leetcode 3: longest substring without repeating characters', () =>{
    // sliding window
    function lengthOfLongestSubstring(s: string): number {
        if (!s) {
            return 0;
        }

        let maxCount = 0;
        let leftBound = 0;
        let rightBound = 0;
        
        const charSet = new Set();
    
        do {
            if (charSet.has(s.charAt(rightBound))) {
                maxCount = Math.max(rightBound - leftBound, maxCount);
                charSet.delete(s.charAt(leftBound));
                leftBound++;
            }
            else {
                charSet.add(s.charAt(rightBound));
                rightBound++;
            }

        } while(rightBound < s.length);

        return Math.max(rightBound - leftBound, maxCount);
    };

    it('test case 1 s = "abcabcbb", output 3', () =>{
        const output = lengthOfLongestSubstring('abcabcbb');
        expect(output).toEqual(3);
    });

    it('test case 2 s = "bbbbb", output 1', () =>{
        const output = lengthOfLongestSubstring('bbbbb');
        expect(output).toEqual(1);
    });

    it('test case 3 s = "pwwkew", output 3', () =>{
        const output = lengthOfLongestSubstring('pwwkew');
        expect(output).toEqual(3);
    });
});