xdescribe('leetcode 68: Text Justification', () => {
    function fullJustify(words: string[], maxWidth: number): string[] {
        const result: string[] = [];

        let l = 0;
        let r = 0;

        let currentLineWidth = 0;
        while (r < words.length) {
            if (canFit(currentLineWidth, maxWidth, words, r)) {
                currentLineWidth = currentLineWidth === 0 ? words[r].length : currentLineWidth + 1 + words[r].length;
                r++;
            } else {
                result.push(generateRow(words, l, r - 1, currentLineWidth, maxWidth));
                l = r;
                currentLineWidth = 0;
            }
        }

        result.push(generateRow(words, l, r - 1, currentLineWidth, maxWidth));

        return result;
    }

    function canFit(currentLineWidth: number, maxWidth: number, words: string[], r: number): boolean {
        return currentLineWidth + 1 + words[r].length <= maxWidth;
    }

    function generateRow(words: string[], l: number, r: number, currentLineWidth: number, maxWidth: number): string {
        if (l === r) {
            const padding = maxWidth - words[r].length;
            const result = words[r] + new Array<string>(padding).fill(' ').join('');

            return result;
        }

        const numberOfWords = r - l + 1;
        const spacesInBetween = numberOfWords - 1;
        const totalSizeOfWords = currentLineWidth - spacesInBetween;
        const totalSizeOfWhiteSpaces = maxWidth - totalSizeOfWords;

        const padding = Math.floor(totalSizeOfWhiteSpaces / spacesInBetween);
        const paddingArray = new Array<Array<string>>(spacesInBetween).fill([]).map((r) => new Array<string>(padding).fill(' '));

        if (totalSizeOfWhiteSpaces % spacesInBetween !== 0) {
            paddingArray[0].push(' ');
        }

        const paddingArray1D = paddingArray.map((row) => row.join(''));

        const rowArray: string[] = [];

        for (let i = 0; i < paddingArray1D.length; i++) {
            rowArray.push(words[l + i]);
            rowArray.push(paddingArray1D[i]);
        }

        rowArray.push(words[r]);

        return rowArray.join('');
    }

    it('test case 1 Input: words = ["This", "is", "an", "example", "of", "text", "justification."], target = 5,  maxWidth = 16', () => {
        const words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'];

        const expectedResult = ['This    is    an', 'example  of text', 'justification.  '];
        const result = fullJustify(words, 16);
        expect(result).toEqual(expectedResult);
    });
});
