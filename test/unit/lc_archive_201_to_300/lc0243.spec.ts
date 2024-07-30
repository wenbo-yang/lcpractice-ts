xdescribe('leetcode 243: description', () => {
    function shortestDistance(words: string[], word1: string, word2: string) {
        let word1Index: number = -1;
        let word2Index: number = -1;
        let distance = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < words.length; i++) {
            if (words[i] === word1) {
                word1Index = i;
            }

            if (words[i] === word2) {
                word2Index = i;
            }

            if (word1Index !== -1 && word2Index !== -1) {
                distance = Math.min(Math.abs(word1Index - word2Index) + 1, distance);
            }
        }

        return distance;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
