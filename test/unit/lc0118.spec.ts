xdescribe('leetcode 118: pascals triangle', () => {
    function generate(numRows: number): number[][] {
        const result: number[][] = [];

        for (let i = 0; i < numRows; i++) {
            if (i === 0) {
                result.push([1]);
            } else if (i === 1) {
                result.push([1, 1]);
            } else {
                result.push([1]);

                for (let j = 1; j < i; j++) {
                    result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
                }

                result[i].push(1);
            }
        }

        return result;
    }

    it('test case 1 Input: numRows = 5, Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] ', () => {
        const result = generate(5);
        expect(result).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    });
});
