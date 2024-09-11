xdescribe('leetcode 566: description', () => {
    function matrixReshape(mat: number[][], r: number, c: number): number[][] {
        if (r * c !== mat.length * mat[0].length) {
            return mat;
        }

        let result = new Array<Array<number>>(r).fill([]).map((r) => new Array<number>().fill(0));
        let index = 0;
        while (index < r * c) {
            let rR = Math.floor(index / r);
            let rC = index % c;

            let i = Math.floor(index / mat.length);
            let j = index % mat[0].length;

            result[rR][rC] = mat[i][j];

            index++;
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
