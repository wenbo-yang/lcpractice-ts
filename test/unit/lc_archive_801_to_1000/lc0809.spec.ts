xdescribe('leetcode 809: expressive words', () => {
    function expressiveWords(s: string, words: string[]): number {
        let expressiveCount = 0;
        for (const word of words) {
            if (isStretchy(s, word)) {
                expressiveCount++;
            }
        }
      
        return expressiveCount;
    };

    function isStretchy(source: string, target: string): boolean {
        let sourceLength = source.length, targetLength = target.length;
        if (targetLength > sourceLength) return false;
      
        let i = 0, j = 0;
      
        while (i < sourceLength && j < targetLength) {
            if (source[i] !== target[j]) return false;
          
            let runStartSource = i;
            while (i < sourceLength && source[i] === source[runStartSource]) i++;
            let countSource = i - runStartSource;
          
            let runStartTarget = j;
            while (j < targetLength && target[j] === target[runStartTarget]) j++;
            let countTarget = j - runStartTarget;
          
            if (countSource < countTarget || (countSource < 3 && countSource !== countTarget)) return false;
        }
      
        // If we've reached the end of both source and target, return true.
        return i === sourceLength && j === targetLength;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
