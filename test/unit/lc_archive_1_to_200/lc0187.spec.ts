xdescribe('leetcode 187: repeated DNA sequence', () => {
    function findRepeatedDnaSequences(s: string): string[] {
        let r = 10;
        let cachedSequence: Map<string, { sequence: string; count: number }> = new Map();

        const window: string[] = [];
        initializeWindow(s, window);

        while (r < s.length) {
            const currentSequence = window.join('');
            cachedSequence.set(currentSequence, { sequence: currentSequence, count: (cachedSequence.get(currentSequence) || { sequence: '', count: 0 }).count + 1 });
            window.shift();
            window.push(s[r]);
            r++;
        }

        let result: string[] = [];

        for (const value of cachedSequence.values()) {
            if (value.count > 1) {
                result.push(value.sequence);
            }
        }

        return result;
    }

    function initializeWindow(s: string, window: string[]) {
        for (let i = 0; i < 10; i++) {
            window.push(s[i]);
        }
    }

    it('test case 1 Input s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT":,Output: ["AAAAACCCCC","CCCCCAAAAA"] ', () => {
        const s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';
        expect(findRepeatedDnaSequences(s)).toEqual(['AAAAACCCCC', 'CCCCCAAAAA']);
    });
});
