xdescribe('leetcode 806: description', () => {
    function numberOfLines(widths: number[], s: string): number[] {
        let lines = 0;

        let currentLineWidth = 0;
        for (const c of s) {
            const charWidth = widths[c.charCodeAt(0) - 'a'.charCodeAt(0)];
            if (currentLineWidth + charWidth > 100) {
                currentLineWidth = 0;
                lines++;
            }
            currentLineWidth += charWidth;    
        }

        return [lines, currentLineWidth];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
