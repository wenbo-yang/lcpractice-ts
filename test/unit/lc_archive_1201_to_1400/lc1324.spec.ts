xdescribe('leetcode 1324: print words vertically', () => {
    function printVertically(s: string): string[] {
        const rows = s.split(' ');
        let maxLength = 0;
        rows.forEach(n => maxLength = Math.max(maxLength, n.length));

        let result = new Array<string>(rows.length).fill('');
        for (let j = 0; j < maxLength; j++) {
            for (let i = 0; i < rows.length; i++) {
                result[j]+= rows[i][j] || ' ';
            }
        }

        return result.map(s => s.trimEnd());
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
