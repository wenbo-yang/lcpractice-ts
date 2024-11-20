xdescribe('leetcode 966: description', () => {
    function replaceVowels(word: string): string {
        const vowelPattern = /[aeiou]/gi;
        return word.replace(vowelPattern, '*');
    };
    
    function spellChecker(wordList: string[], queries: string[]): string[] {
        const wordsSet = new Set<string>();
        wordList.forEach(word => wordsSet.add(word));
        const lowercaseMap = new Map<string, string>();
        const patternMap = new Map<string, string>();
    
        wordList.forEach(word => {
            const lowerWord = word.toLowerCase();
            if (!lowercaseMap.has(lowerWord)) {
                lowercaseMap.set(lowerWord, word);
            }
    
            const vowelLessWord = replaceVowels(lowerWord);
            if (!patternMap.has(vowelLessWord)) {
                patternMap.set(vowelLessWord, word);
            }
        });
    
        const answers: string[] = [];
        queries.forEach(query => {
            if (wordsSet.has(query)) {
                answers.push(query);
                return;
            }
    
            const lowerQuery = query.toLowerCase();
    
            if (lowercaseMap.has(lowerQuery)) {
                answers.push(lowercaseMap.get(lowerQuery)!);
                return; 
            }
    
            const patternQuery = replaceVowels(lowerQuery);
    
            if (patternMap.has(patternQuery)) {
                answers.push(patternMap.get(patternQuery)!);
                return; 
            }
    
            answers.push("");
        });
    
        return answers;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
