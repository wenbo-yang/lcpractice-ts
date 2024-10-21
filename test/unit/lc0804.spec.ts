xdescribe('leetcode 804: unique morse code words', () => {
    function uniqueMorseRepresentations(words: string[]): number {
        const codeMap: string[] = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

        const result = new Set<string>();
        for (const w of words) {
            const code: string[] = [];
            for (const c of w) {
                code.push(codeMap[c.charCodeAt(0) - 'a'.charCodeAt(0)]);
            }
            result.add(code.join(''));
        }

        return result.size;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
