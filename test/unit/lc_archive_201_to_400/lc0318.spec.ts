xdescribe('leetcode 318: maxProd', () => {
    function maxProduct(words: string[]): number {
        const masks: number[] = new Array<number>(words.length);
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            for (let j = 0; j < word.length; j++) {
                masks[i] |= 1 << (word[j].charCodeAt(0) - 'a'.charCodeAt(0));
            }
        }

        let maxProd = 0;
        for (let i = 0; i < words.length; i++) {
            for (let j = i + 1; j < words.length; j++) {
                if ((masks[i] & masks[j]) === 0) {
                    maxProd = Math.max(words[i].length * words[j].length, maxProd);
                }
            }
        }

        return maxProd;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
