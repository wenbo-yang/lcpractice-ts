xdescribe('leetcode 1032: stream of chars', () => {
    interface TrieNode {
        children: TrieNode[];
        isEnd: boolean;
    }
    class StreamChecker {
        private children: TrieNode[] = [];
        private isEnd: boolean = false;
        private trie: TrieNode | null = null;
        private streamSoFar: string = "";
        
        private createTrieNode(): TrieNode {
            return {
                children: new Array(26).fill(null),
                isEnd: false
            };
        }
        
        private insert(word: string): void {
            let node: TrieNode | null = this.trie;
            for (let i = word.length - 1; i >= 0; --i) {
                const index: number = word.charCodeAt(i) - 'a'.charCodeAt(0);
                if (node && !node.children[index]) {
                    node.children[index] = this.createTrieNode();
                }
                node = node?.children[index] || null;
            }
            if (node) node.isEnd = true;
        }
        
        private search(word: string): boolean {
            let node: TrieNode | null = this.trie;
            for (let i = word.length - 1; i >= 0; --i) {
                const index: number = word.charCodeAt(i) - 'a'.charCodeAt(0);
                if (node && !node.children[index]) {
                    return false;
                }
                node = node?.children[index] || null;
                if (node && node.isEnd) {
                    return true;
                }
            }
            return node?.isEnd || false;
        }
        
        private initializeTrie(words: string[]): void {
            this.trie = this.createTrieNode();
            for (const word of words) {
                this.insert(word);
            }
        }


        constructor(words: string[]) {
            this.initializeTrie(words)
        }
    
        query(letter: string): boolean {
            this.streamSoFar += letter;
            return this.search(this.streamSoFar);
        }
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
