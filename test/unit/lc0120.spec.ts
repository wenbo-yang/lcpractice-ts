xdescribe('leetcode 120: Triangle minimum path sum from top to bottom', () => {
    // should use no extra memory
    // idea: dynamic programing, but use the triange itself
    // [[2],
    //  [3,4],
    //  [6,5,7],
    //  [4,1,8,3]]
    //     [2],
    //    [5,6],
    //   [11,    10,         13],
    //  [15,11 (min of11 or 10),18 (min of 10, 13), 16]]

    function minimumTotal(triangle: number[][]): number {
        for (let i = 1; i < triangle.length; i++) {
            calculateSum(i, triangle);
        }

        return Math.min(...triangle[triangle.length - 1]);
    }

    function calculateSum(currentRow: number, triangle: number[][]) {
        const prevRow = triangle[currentRow - 1];
        triangle[currentRow][0] += prevRow[0];
        triangle[currentRow][triangle[currentRow].length - 1] += prevRow[prevRow.length - 1];
        let rowMin = Math.min(triangle[currentRow][0], triangle[currentRow][triangle[currentRow].length - 1]);
        for (let i = 1; i < triangle[currentRow].length - 1; i++) {
            triangle[currentRow][i] = Math.min(prevRow[i - 1], prevRow[i]) + triangle[currentRow][i];
        }
    }

    it('test case 1 Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]],, output 11', () => {
        const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

        const result = minimumTotal(triangle);

        expect(result).toEqual(11);
    });

    it('test case 2 Input: triangle = [[1],[2,3]], output 3', () => {
        const triangle = [[1], [2, 3]];

        const result = minimumTotal(triangle);

        expect(result).toEqual(3);
    });
});
