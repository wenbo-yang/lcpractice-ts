xdescribe('leetcode 1255: max score words formed by letters', () => {
    const letterCounts: number[] = Array(26).fill(0);
    let words: string[], letters: string[], score: number[];
    let maxScore: number = 0;

    function preprocessLetters() {
        for (const letter of letters) {
            letterCounts[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
    }

    function calculateMaxScore() {
        const numWords = words.length;
        for (let combination = 0; combination < (1 << numWords); ++combination) {
            const wordCounts = Array(26).fill(0); 
            for (let wordIndex = 0; wordIndex < numWords; ++wordIndex) {
            if (combination & (1 << wordIndex)) {
                for (const letter of words[wordIndex]) {
                    wordCounts[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
                }
            }
            }

            let isValidCombination: boolean = true; 
            let currentScore: number = 0; 
            for (let letterIndex = 0; letterIndex < 26; ++letterIndex) {
                if (wordCounts[letterIndex] > letterCounts[letterIndex]) {
                    isValidCombination = false;
                    break;
                }
                currentScore += wordCounts[letterIndex] * score[letterIndex];
            }

            if (isValidCombination && maxScore < currentScore) {
                maxScore = currentScore;
            }
        }
    }
    function maxScoreWords(words: string[], letters: string[], score: number[]): number {
        words = words;
        letters = letters;
        score = score;
        preprocessLetters(); 
        calculateMaxScore(); 
        return maxScore;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
