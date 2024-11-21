xdescribe('leetcode 916: word subsets', () => {
    function wordSubsets(words1: string[], words2: string[]): string[] {
        let maxCharFrequencies: number[] = new Array(26).fill(0); 

        for (const word of words2) {
            const currentWordFrequencies = calculateCharFrequencies(word);
            for (let i = 0; i < 26; i++) {
                maxCharFrequencies[i] = Math.max(maxCharFrequencies[i], currentWordFrequencies[i]);
            }
        }
    
        const universalWords: string[] = [];
        
        for (const word of words1) {
            const currentWordFrequencies = calculateCharFrequencies(word);
            let isUniversal = true;
          
            for (let i = 0; i < 26; i++) {
                if (maxCharFrequencies[i] > currentWordFrequencies[i]) {
                    isUniversal = false;
                    break;
                }
            }
          
            if (isUniversal) {
                universalWords.push(word);
            }
        }
    
        return universalWords;
    };

    function calculateCharFrequencies(word: string): number[] {
        const frequencies: number[] = new Array(26).fill(0);
        for (const char of word) {
            frequencies[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return frequencies;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
