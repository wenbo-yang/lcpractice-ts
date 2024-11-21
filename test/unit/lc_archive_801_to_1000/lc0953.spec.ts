xdescribe('leetcode 953: verifying an alien dictionary', () => {
    function isAlienSorted(words: string[], order: string): boolean {
        const charPositionMap = new Map<string, number>();
        for (const char of order) {
            charPositionMap.set(char, charPositionMap.size);
        }

        for (let i = 1; i < words.length; i++) {
            const firstWord = words[i - 1];
            const secondWord = words[i];

            const minLength = Math.min(firstWord.length, secondWord.length);
            let areWordsEqual = false;

            for (let j = 0; j < minLength; j++) {
                if ((charPositionMap.get(firstWord[j]) || 0) > (charPositionMap.get(secondWord[j]) || 0)) {
                    return false;
                }
                if ((charPositionMap.get(firstWord[j]) || 0) < (charPositionMap.get(secondWord[j]) || 0)) {
                    areWordsEqual = true;
                    break;
                }
            }

            if (!areWordsEqual && firstWord.length > secondWord.length) {
                return false;
            }
        }

        return true;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
