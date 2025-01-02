xdescribe('leetcode 1268: search suggestion system', () => {
    class TrieNode {
        isEnd = false;
        children = new TrieNode[26];
        word = '';
        constructor(isEnd: boolean) {
            this.isEnd = isEnd;
        }
    }
    
    class TrieTree {
        root = new TrieNode(false);
        parse (word) {
            let temp = this.root;
            for (const c of word) {
                const i = c.charCodeAt(0) - 'a'.charCodeAt(0);
                if (!temp.children[i]) {
                    temp.children[i] = new TrieNode(false);
                }
                temp = temp.children[i];
            }
            temp.isEnd = true;
            temp.word = word;
        }

        searchTopK(prefix: string, k): string[] {
            const result: string[] = [];
            let temp = this.root;
            for (const c of prefix) {
                let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
                if (!temp.children[i]) {
                    return [];
                }
                temp = temp.children[i];
            }
            
            this.searchHelper(temp, result, k);

            return result;
        }
        
        
        private searchHelper(node: TrieNode | undefined, result: string[], topK: number) {
            if (node === undefined) {
                return;
            }
            
            if (result.length === topK) {
                return;
            }

            if (node.isEnd) {
                result.push(node.word);
            }

            for(const c of node.children) {
                this.searchHelper(c, result, topK);
            }
        }
    }
    
    function suggestedProducts(products: string[], searchWord: string): string[][] {
        const tree = new TrieTree();

        for (const p of products) {
            tree.parse(p);
        }

        let prefix = '';
        let result: string[][] = [];
        for (const c of searchWord) {
            prefix+= c;
            result.push(tree.searchTopK(prefix, 3));
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
