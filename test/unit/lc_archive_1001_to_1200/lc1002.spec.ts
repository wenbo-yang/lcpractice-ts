xdescribe('leetcode 1002: find common chars', () => {
    function commonChars(words: string[]): string[] {
        const minFrequencies: number[] = new Array(26).fill(Infinity);

        for (const word of words) {
          const wordFrequencies: number[] = new Array(26).fill(0);
      
          for (const char of word) {
            const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
            wordFrequencies[charIndex]++;
          }
      
          for (let i = 0; i < 26; ++i) {
            minFrequencies[i] = Math.min(minFrequencies[i], wordFrequencies[i]);
          }
        }
      
        const result: string[] = [];
      
        for (let i = 0; i < 26; ++i) {
          while (minFrequencies[i] > 0) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
            minFrequencies[i]--;
          }
        }
      
        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
