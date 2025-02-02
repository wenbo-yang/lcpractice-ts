xdescribe('leetcode 1297: max number of occurrences of a substring', () => {
    function maxFreq(s: string, maxLetters: number, minSize: number, maxSize: number): number {
        // 
        // window of 26 at most 26 letters and at least 1
        //   a a b a b c a a b
        // [ 1 1 2 2 2 3 3 3 3]

        let maxFrequency: number = 0;
        let substringCounts: Map<string, number> = new Map<string, number>();

        for (let i = 0; i <= s.length - minSize; ++i) {
            let t: string = s.substring(i, i + minSize);
            let uniqueChars: Set<string> = new Set<string>(t.split(''));
            if (uniqueChars.size <= maxLetters) {
                let count: number = substringCounts.get(t) || 0;
                substringCounts.set(t, count + 1);   
                maxFrequency = Math.max(maxFrequency, count + 1);
            }
        }
        return maxFrequency;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
