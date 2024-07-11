xdescribe('leetcode 6: zigzag conversion', () => {
    function convert(s: string, numRows: number): string {
        if (numRows === 1) {
            return s;
        }

        const arrays: string[][] = [];

        for (let i = 0; i < numRows; i++) {
            arrays.push([]);
        }

        let currentRow = -1;
        let vector = 1;
        for (let i = 0; i < s.length; i++) {
            if (currentRow === numRows - 1) {
                vector = -1;
            }

            if (currentRow === 0) {
                vector = 1;
            }

            currentRow = currentRow + vector;
            arrays[currentRow].push(s.charAt(i));
        }

        const stringArrays: string[] = [];
        for (let i = 0; i < numRows; i++) {
            stringArrays.push(arrays[i].join(''));
        }

        return stringArrays.join('');
    }

    it('test case 1 s = "PAYPALISHIRING", numRows = 3, output PAHNAPLSIIGYIR', () => {
        const output = convert('PAYPALISHIRING', 3);

        expect(output).toEqual('PAHNAPLSIIGYIR');
    });

    it('test case 2 s = "PAYPALISHIRING", numRows = 4, output PINALSIGYAHRPI', () => {
        const output = convert('PAYPALISHIRING', 4);
        expect(output).toEqual('PINALSIGYAHRPI');
    });

    it('test case 3 s = "A", numRows = 1, output A', () => {
        const output = convert('A', 1);
        expect(output).toEqual('A');
    });

    it('test case 4 s = "AB", numRows = 1, output AB', () => {
        const output = convert('AB', 1);
        expect(output).toEqual('AB');
    });
});
