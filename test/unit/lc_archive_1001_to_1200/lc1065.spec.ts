xdescribe('leetcode 1065: index pairs of a string', () => {
    class TrieNode {
        children: TrieNode[];
        isEndOfWord: boolean;
    
        constructor() {
            this.children = Array(26).fill(null);
            this.isEndOfWord = false;
        }
    
        insert(word: string): void {
            let node: TrieNode = this;
            for (const c of word) {
                const index: number = c.charCodeAt(0) - 'a'.charCodeAt(0);
                if (!node.children[index]) {
                    node.children[index] = new TrieNode();
                }
                node = node.children[index];
            }
            node.isEndOfWord = true;
        }
    }

    function indexPairs(text: string, words: string[]): number[][] {
        const trie: TrieNode = new TrieNode();
        words.forEach(word => {
            trie.insert(word);
        });
    
        const n: number = text.length;
        const result: number[][] = [];
    
        for (let i = 0; i < n; ++i) {
            let node: TrieNode = trie;
            for (let j = i; j < n; ++j) {
                const index: number = text.charCodeAt(j) - 'a'.charCodeAt(0);
                if (!node.children[index]) break;
                node = node.children[index];
                if (node.isEndOfWord) {
                    result.push([i, j]);
                }
            }
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
