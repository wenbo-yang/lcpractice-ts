xdescribe('leetcode 890: description', () => {
    function findAndReplacePattern(words: string[], pattern: string): string[] {
        const target = replaceWithUniquePatterns(pattern);
        const result: string[] = [];
        for (const word of words) {
            if (target === replaceWithUniquePatterns(word)) {
                result.push(word);
            }
        }

        return result;
    };

    function replaceWithUniquePatterns(word: string): string {
        let x = 0;
        const uniqueChars = new Map<string, string>();

        for (const c of word) {
            if (!uniqueChars.has(c)) {
                uniqueChars.set(c, x.toString() + ',');
                x++;
            }
        }

        let temp = word;

        for (const kv of uniqueChars.entries()) {
            temp = temp.replace(kv[0], kv[1]);
        }

        return temp;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


