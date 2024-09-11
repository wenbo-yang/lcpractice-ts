xdescribe('leetcode 500: description', () => {
    function findWords(words: string[]): string[] {
        const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
        const result: string[] = [];
        for (const word of words) {
            if (isTypableInOneRow(word, rows)) {
                result.push(word);
            }
        }

        return result;
    }

    function isTypableInOneRow(word: string, rows: string[]) {
        const row = getRow(word[0], rows);

        for (const c of word) {
            if (getRow(c, rows) !== row) {
                return false;
            }
        }

        return true;
    }

    function getRow(char: string, rows: string[]): number {
        const index = rows.findIndex((r) => r.indexOf(char.toLowerCase()) !== -1);
        return index;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
