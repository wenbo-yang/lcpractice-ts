xdescribe('leetcode 422: valid word square', () => {
    function validWordSquare(words: string[]): boolean {
        for (let i = 0; i < words.length; i++) {
            if (!testRowColumn(i, words)) {
                return false;
            }
        }

        return true;
    }

    function testRowColumn(i: number, words: string[]) {
        const ithRow = words[i];
        const ithCol = words.map((r) => r[i]);
        while (ithCol[ithCol.length - 1] === undefined) {
            ithCol.pop();
        }
        return ithRow === ithCol.join('');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
