xdescribe('leetcode 1234: replace the substring for balanced string', () => {
    function countCharacters(s: string): number[] {
        const charCount = [0, 0, 0, 0]; 
        const characters = 'QWER'; 
        for (const ch of s) {
            charCount[characters.indexOf(ch)]++;
        }
        return charCount;
    }
    
    function balancedString(s: string): number {
        if (s.length === 0 || s.length % 4 !== 0) {
            return -1;
        }
        const characters = 'QWER'; 
        const charCount = countCharacters(s);
        const stringLength = s.length;
        const target = stringLength / 4;
    
        if (charCount.every(count => count === target)) {
            return 0;
        }
    
        let answer = stringLength;
    
        for (let start = 0, end = 0; start < stringLength; ++start) {
            charCount[characters.indexOf(s[start])]--;
            while (end <= start && charCount.every(count => count <= target)) {
                answer = Math.min(answer, start - end + 1); // Update the answer with smaller length
                charCount[characters.indexOf(s[end++])]++;
            }
        }
    
        return answer; // Return the minimum length of substring to be replaced
        
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
