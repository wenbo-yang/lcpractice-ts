xdescribe('leetcode 1347: minimum number of steps to make two strings anagram', () => {
    function minSteps(s: string, t: string): number {
        const sCount: number[] = new Array<number>(26).fill(0);
        const tCount: number[] = new Array<number>(26).fill(0);

        s.split('').forEach(c => sCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++);
        t.split('').forEach(c => tCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++);
        const diff: number[] = [];
        for(let i = 0; i < 26; i++) {
            diff.push(sCount[i] - tCount[i]);
        }
        
        return diff.filter(d => d > 0).reduce((a,b) => a + b);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
