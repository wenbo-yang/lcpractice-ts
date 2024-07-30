xdescribe('leetcode 37: sudoku solver', () => {
    function isValidSudoku(board: string[][]): boolean {
        throw new Error('not implemented');
    }

    it('test case 1 Input: nums = [1,3,5,6], target = 5, output 2 ', () => {
        const s: string[][] = [
            ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
            ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
            ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
            ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
            ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
            ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
            ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
        ];

        const result = isValidSudoku(s);

        expect(result).toEqual(true);
    });
});
