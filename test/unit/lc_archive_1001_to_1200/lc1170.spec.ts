xdescribe('leetcode 1170: compare string by frequency of the smallest character', () => {
    function numSmallerByFrequency(queries: string[], words: string[]): number[] {
        const sortedWordFrequencies = words.map(frequencyOfSmallestChar).sort((a, b) => a - b);
        const answerArray: number[] = []; // Initialize an array to store the results.
    
        for (const query of queries) {
            const queryFrequency = frequencyOfSmallestChar(query);
            let leftIndex = 0,
                rightIndex = sortedWordFrequencies.length;
        
            while (leftIndex < rightIndex) {
                const midIndex = Math.floor((leftIndex + rightIndex) / 2);
                if (sortedWordFrequencies[midIndex] > queryFrequency) {
                    rightIndex = midIndex;
                } else {
                    leftIndex = midIndex + 1;
                }
            }
        
            answerArray.push(sortedWordFrequencies.length - leftIndex);
        }
        return answerArray; // Return the final result array.
    };

    function frequencyOfSmallestChar(s: string): number {
        const frequencyCounter = new Array(26).fill(0); // Initialize an array for alphabets.
        // Count frequency of each character in the string.
        for (const char of s) {
            frequencyCounter[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        // Find and return the frequency of the smallest character.
        return frequencyCounter.find(count => count > 0); 
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
