xdescribe('leetcode 1178: number of valid words for each puzzle', () => {
    function findNumOfValidWords(words: string[], puzzles: string[]): number[] {
        const frequencyMap: Map<number, number> = new Map();

        // Generate a bitmask for each word and count their frequency
        words.forEach(word => {
            let bitmask = 0;
            for (const char of word) {
                bitmask |= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));
            }
            frequencyMap.set(bitmask, (frequencyMap.get(bitmask) || 0) + 1);
        });
    
        // Initialize an array to store the number of valid words for each puzzle
        const result: number[] = [];
    
        // Calculate the number of valid words for each puzzle
        puzzles.forEach(puzzle => {
            let puzzleBitmask = 0;
            for (const char of puzzle) {
                puzzleBitmask |= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));
            }
          
            let validWordsCount = 0;
            const firstCharBit = 1 << (puzzle.charCodeAt(0) - 'a'.charCodeAt(0));
    
            // Use subset generation method to iterate over all subsets of the puzzle bitmask
            for (let subset = puzzleBitmask; subset; subset = (subset - 1) & puzzleBitmask) {
                // Check if the first character of the puzzle is in the current subset
                if (subset & firstCharBit) {
                    validWordsCount += frequencyMap.get(subset) || 0;
                }
            }
          
            // Push the count of valid words for this puzzle into the result array
            result.push(validWordsCount);
        });
    
        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
