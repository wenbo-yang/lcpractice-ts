xdescribe('leetcode 418: description', () => {
    function numberOfWords(row: number, col: number, words: string[]): number {
        if (words.find(w => w.length > col)) {
            return 0;
        }

        let index = 0;
        let result = 0;
        let currRow = 0;
        let currCol = 0;
        while (currRow < row) {
            const wordLength = words[index % words.length].length;
            if (canFit(currCol, col, wordLength)) {
                currCol = fitIntoCol(currCol, wordLength);
                index++;
            }
            else {
                currRow++;
                currCol = 0
                continue;
            }

            // fitted the last one
            if (index % words.length === words.length - 1) { 
                result++;
            }
        }

        return result;
    }

    function canFit(currCol: number, col: number, wordLength: number): boolean { 
        if (currCol === 0) {
            return wordLength <= col;
        }

        return currCol + 1 + wordLength <= col;
    }

    function fitIntoCol(currCol: number, wordLength: number): number {
        if (currCol === 0) {
            return wordLength;
        }

        return currCol + 1 + wordLength
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




