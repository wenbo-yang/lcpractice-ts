xdescribe('leetcode 1292: maximum sie lenght of a squa with sum less than or equal to threshold', () => {
    function maxSideLength(mat: number[][], threshold: number): number {
        const rows = mat.length;
        const cols = mat[0].length;
        const prefixSum: number[][] = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0)); 

        for (let i = 1; i <= rows; ++i) {
            for (let j = 1; j <= cols; ++j) {
                prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1] + mat[i - 1][j - 1];
            }
        }

        const hasValidSquare = (k: number): boolean => {
            for (let i = 0; i <= rows - k; ++i) {
                for (let j = 0; j <= cols - k; ++j) {
                    const sum = prefixSum[i + k][j + k] - prefixSum[i + k][j] - prefixSum[i][j + k] + prefixSum[i][j];
                    if (sum <= threshold) {
                        return true; 
                    }
                }
            }
            return false;
        };

        let left = 0;
        let right = Math.min(rows, cols);

        while (left < right) {
            const mid = Math.floor((left + right + 1) / 2); 
            if (hasValidSquare(mid)) {
                left = mid;
            } else {
                right = mid - 1; 
            }
        }

        return left;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
