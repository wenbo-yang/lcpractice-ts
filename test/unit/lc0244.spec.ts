xdescribe('leetcode 244: shortest word distance in list', () => {
    class ShortestDistance {
        private wordsIndexMap: Map<string, number[]> = new Map();
        private cache: Map<string, number> = new Map();

        constructor(words: string) {
            for (let i = 0; i < words.length; i++) {
                const indexArray = this.wordsIndexMap.get(words[i]) || [];
                indexArray.push(i);
                this.wordsIndexMap.set(words[i], indexArray);
            }
        }

        public getShortestDistance(word1: string, word2: string): number {
            if (this.cache.has([word1, word2].join())) {
                return this.cache.get([word1, word2].join()) || NaN;
            }

            const array1 = this.wordsIndexMap.get(word1) || [];
            const array2 = this.wordsIndexMap.get(word2) || [];

            let minDiff = Number.MAX_SAFE_INTEGER;

            for (let i = 0; i < array1.length; i++) {
                minDiff = Math.min(Math.abs(array1[i] - (array2[i] || Number.MAX_SAFE_INTEGER)), Math.abs(array1[i] - (array2[i - 1] || Number.MAX_SAFE_INTEGER)), Math.abs(array1[i] - (array2[i - 1] || Number.MAX_SAFE_INTEGER)), minDiff);
            }

            this.cache.set([word1, word2].join(), minDiff);
            this.cache.set([word2, word1].join(), minDiff);

            return minDiff;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
