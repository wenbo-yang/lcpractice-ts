xdescribe('leetcode 311: sparse matrix multiplication', () => {
    function sparseMatrixMultiplication(mat1: number[][], mat2: number[][]): void {
        const rowMap = new Map<number, Set<number>>()
        const colMap = new Map<number, Set<number>>();

        for (let i = 0; i < mat1.length; i++) {
            for (let j = 0; j < mat1[0].length; j++) {
                if (mat1[i][j] !== 0) {
                    const indices = (rowMap.get(i) || new Set())
                    indices.add(j);
                    rowMap.set(i, indices)
                }
            }
        }

        for (let j = 0; j < mat2[0].length; j++) {
            for (let i = 0; i < mat2.length; i++) {
                if (mat2[i][j] !== 0) {
                    const indices = (colMap.get(i) || new Set())
                    indices.add(i);
                    colMap.set(j, indices)
                }
            }
        }

        const result = new Array<Array<number>>(mat1.length).fill([]).map(r => new Array<number>(mat1[0].length).fill(0));

        for(let i = 0; i < result.length; i++) {
            for(let j = 0; j < result[0].length; j++) {
                result[i][j] = sum(mat1, mat2, rowMap, colMap, i, j);
            }
        }

    }

    function sum(mat1: number[][], mat2: number[][], rowMap: Map<number, Set<number>>, colMap: Map<number, Set<number>>, i: number, j: number): number {
        const row = rowMap.get(i);
        const col = colMap.get(j);

        if (row && col) {
            let sum = 0;
            const intersection = intersect(row, col);
            for(const rc of intersection) {
                sum += mat1[i][rc] * mat2[rc][j]
            }

            return sum;
        }

        return 0;
    }

    function intersect(set1: Set<number>, set2: Set<number>): number[] {
        const set: number[] = [];

        for(const num of set1) {
            if (set2.has(num)) {
                set.push(num);
            }
        }

        return set;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




