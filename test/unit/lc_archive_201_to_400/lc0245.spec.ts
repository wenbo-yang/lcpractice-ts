xdescribe('leetcode 245: description', () => {
    function shortestDistance(words: string[], word1: string, word2: string) {
        const wordsIndexMap: Map<string, number[]> = new Map();
        const array1 = wordsIndexMap.get(word1) || [];
        const array2 = wordsIndexMap.get(word2) || [];

        let minDiff = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < array1.length; i++) {
            let first = Math.abs(array1[i] - (array2[i] || Number.MAX_SAFE_INTEGER));
            if (word1 === word2) {
                first = Number.MAX_SAFE_INTEGER;
            }

            minDiff = Math.min(first, Math.abs(array1[i] - (array2[i - 1] || Number.MAX_SAFE_INTEGER)), Math.abs(array1[i] - (array2[i - 1] || Number.MAX_SAFE_INTEGER)), minDiff);
        }

        return minDiff;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
