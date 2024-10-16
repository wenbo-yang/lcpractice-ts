xdescribe('leetcode 792: number of matching subsequences', () => {
    class TrieNode {
        isEnd: boolean = false;
        children = new Array<TrieNode>(26);
    }

    class TrieTree {
        root: TrieNode = new TrieNode();
        insert(word: string) {  
            let temp = this.root;
            for(const c of word) {
                if (!temp.children[TrieTree.getKey(c)]){
                    temp.children[TrieTree.getKey(c)] = new TrieNode();
                }

                temp = temp.children[TrieTree.getKey(c)];
            }
            temp.isEnd = true;
        }

        static getKey(c) {
            return c.charCodeAt('0') - 'a'.charCodeAt(0);
        }
    }

    function numMatchingSubseq(s: string, words: string[]): number {
        // abcfde
        // a v
        // a x
        // b 

        const trieTree = new TrieTree();

        for (const word of words) {
            trieTree.insert(word);
        }

        const currentlyWorkingPrefixNodes: TrieNode[] = [];
        let count = 0;
        for (const c of s) {
            currentlyWorkingPrefixNodes.push(trieTree.root);
            for (let i = 0; i < currentlyWorkingPrefixNodes.length; i++) {
                if (currentlyWorkingPrefixNodes[i].children[TrieTree.getKey(c)]) {
                    currentlyWorkingPrefixNodes[i] = currentlyWorkingPrefixNodes[i].children[TrieTree.getKey(c)];
                    if (currentlyWorkingPrefixNodes[i].isEnd) {
                        count++;
                    }
                }
            }
        }

        return count;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
