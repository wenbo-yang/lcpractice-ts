xdescribe('leetcode 1329: sort the matrix diagonally', () => {
    function diagonalSort(mat: number[][]): number[][] {
        // sort starting with first row and cols
        sortAccordingToCols(mat);
        sortAccordingToRows(mat);

        return mat;
    };

    function sortAccordingToRows(mat: number[][]) {
        let r = 1;
        let c = 0;

        while (r < mat.length) {
            let i = r; 
            let j = c;
            let values: number[] = [];
            while (mat[i]) {
                values.push(mat[i][j]);
                i++;
                j++;
            }

            values.sort((a,b) => a - b);
            i = r;
            j = c; 
            let k = 0;
            while (mat[i][j]) {
                mat[i][j] = values[k++];
                i++;
                j++;
            }
            c++;
        }
    }

    function sortAccordingToCols(mat: number[][]) {
        let r = 0;
        let c = 0;

        while (c < mat[0].length) {
            let i = r;
            let j = c;
            let values: number[] = [];
            while (mat[i][j]) {
                values.push(mat[i][j]);
                i++;
                j++;
            }
            values.sort((a,b) => a - b);
            i = r;
            j = c; 
            let k = 0;
            while (mat[i][j]) {
                mat[i][j] = values[k++];
                i++;
                j++;
            }
            c++;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



