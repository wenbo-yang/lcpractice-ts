xdescribe('leetcode 1023: camel case matching', () => {
    function camelMatch(queries: string[], pattern: string): boolean[] {
        const results: boolean[] = [];
        for (const query of queries) {
            results.push(checkPattern(query, pattern));
        }
        return results;
    };

    function checkPattern(query: string, pattern: string): boolean {
        const queryLength = query.length;
        const patternLength = pattern.length;
        let queryIndex = 0;
        let patternIndex = 0;
        for (patternIndex = 0; patternIndex < patternLength; ++queryIndex, ++patternIndex) {
            while (queryIndex < queryLength && 
                   query[queryIndex] !== pattern[patternIndex] && 
                   query.charCodeAt(queryIndex) >= 97) {  // ASCII 97 = 'a'
                ++queryIndex;
            }
            if (queryIndex === queryLength || query[queryIndex] !== pattern[patternIndex]) {
                return false;
            }
        }
        while (queryIndex < queryLength && query.charCodeAt(queryIndex) >= 97) {
            ++queryIndex;
        }
        return queryIndex == queryLength;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
