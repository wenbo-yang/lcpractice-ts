xdescribe('leetcode 472: concat words', () => {
    // class TrieNode {
    //     char: string;
    //     isWord: boolean;
    //     children: (TrieNode | undefined)[] = [];
    // }

    function findAllConcatenatedWordsInADict(words: string[]): string[] {
        const dict = new Set<string>();

        for (const word of words) {
            dict.add(word);
        }

        const result: string[] = [];
        const mem = new Set<string>();

        for (const word of words) {
            for (let i = 1; i < word.length - 1; i++) {
                const left = word.substring(0, i);
                const right = word.substring(i + 1);
                
                if(dict.has(left) && isWordAConcatWord(right, dict, mem)) {
                    mem.add(word);
                    result.push(word);
                }
            }
        }

        return result
    };

    function isWordAConcatWord(subWord : string, dict: Set<string>, mem: Set<string>): boolean {
        if (dict.has(subWord) || mem.has(subWord)) {
            return true;
        }

        for (let i = 1; i < subWord.length - 1; i++) {
            const left = subWord.substring(0, i);
            const right = subWord.substring(i + 1);
            
            if((dict.has(left) || mem.has(left)) && isWordAConcatWord(right, dict, mem)) {
                mem.add(subWord);
                return true;
            }
        }

        return false;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


