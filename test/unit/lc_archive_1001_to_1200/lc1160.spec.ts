xdescribe('leetcode 1160: find words formed by chars', () => {
    function countCharacters(words: string[], chars: string): number {
        const sourceCharCounts = new Array<number>(26).fill(0);
        chars.split('').forEach(n => sourceCharCounts[n.charCodeAt(0) - 'a'.charCodeAt(0)]++);
        let total = 0;
        for (const w of words) {
            const testCharCounts = new Array<number>(26).fill(0);
            w.split('').forEach(n => testCharCounts[n.charCodeAt(0) - 'a'.charCodeAt(0)]++);

            if (isTestSubsetOfSource(testCharCounts, sourceCharCounts)) {
                total += w.length;
            }
        }

        return total;
    };

    function isTestSubsetOfSource(testCharCounts: number[], sourceCharCounts: number[]) {
        for(let i = 0; i < testCharCounts.length; i++) {
            if (testCharCounts[i] > sourceCharCounts[i]) {
                return false;
            }
        }
    
        return true;
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




