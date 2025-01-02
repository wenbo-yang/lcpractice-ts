xdescribe('leetcode 1253: reconstruct a 2 row binary matrix', () => {
    function reconstructMatrix(upper: number, lower: number, colsum: number[]): number[][] {
        const upperRow: number[] = new Array<number>(colsum.length);
        const lowerRow: number[] = new Array<number>(colsum.length);

        for (let i = 0; i < colsum.length; i++) {
            if (colsum[i] === 0) {
                upperRow[i] = 0;
                lowerRow[i] = 0;
                continue;
            }

            if (colsum[i] === 2) {
                upperRow[i] = 1;
                lowerRow[i] = 1;
                upper--;
                lower--;
            }

            if (colsum[i] === 1) {
                if (upper === 0 && lower === 0) {
                    return [];
                }

                if (upper !== 0) {
                    upperRow[i] = 1;
                    upper--;
                }
                else if (lower !== 0) {
                    lowerRow[i] = 1;
                    lower--;
                }
            }
        }

        return [upperRow, lowerRow];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
