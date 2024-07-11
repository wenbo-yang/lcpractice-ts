xdescribe('leetcode 85: Maximal Rectangle', () => {
    function maximalRectangle(matrix: string[][]): number {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
            return 0;
        }

        const df = new Array<Array<number>>(matrix.length).fill([]).map((r) => new Array<number>(matrix[0].length).fill(0));

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                df[i][j] = matrix[i][j] === '1' ? (j == 0 ? 1 : df[i][j - 1] + 1) : 0;
            }
        }

        let result: number = 0;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                let len = Number.MAX_SAFE_INTEGER;
                for (let k = i; k < matrix.length; k++) {
                    len = Math.min(len, df[k][j]);
                    if (len === 0) {
                        break;
                    }
                    result = Math.max(len * (k - i + 1), result);
                }
            }
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
