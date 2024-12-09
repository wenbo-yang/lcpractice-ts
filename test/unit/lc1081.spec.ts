xdescribe('leetcode 1081: smallest subsequence of distinct chars', () => {
    function smallestSubsequence(s: string): string {
        const windowSize = new Set<string>(s.split('')).size;
        let min = new Array<string>(windowSize).fill('z').join('');
        
        for (let i = 0; i < s.length - windowSize; i++) {
            const window = s.substring(i, i+ windowSize);
            min = window < min ? window : min;
        }

        return min;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
