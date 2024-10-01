xdescribe('leetcode 720: longest word that can be built', () => {
    class TrieNode {
        isEnd: boolean = false;
        children: TrieNode[] = [];
        constructor(isEnd: boolean) {
            this.isEnd = false;
        }
    }

    class TrieTree {
        root: TrieNode = new TrieNode(false);

        constructor() {
        }

        insert(w: string) {
            let node = this.root;
            for (const c of w) {
                if (node.children.length === 0) {
                    node.children = new Array<TrieNode>(26);
                }
                if (!node.children[this.getIndex(c)]) {
                    node.children[this.getIndex(c)] = new TrieNode(false);
                }
                node = node.children[this.getIndex(c)];
            }
            node.isEnd = true;
        }
        
        private getIndex(c: string) {
            return c.charCodeAt(0) - 'a'.charCodeAt(0);
        }

    }
    
    function longestWord(words: string[]): string {
        const trieTree = new TrieTree();

        for (const w of words) {
            trieTree.insert(w);
        }

        return getFirstWord(trieTree.root, '');
    };


    function getFirstWord(root: TrieNode, current: string): string {
        for(let i = 0; i < root.children.length; i++) {
            if (root.children[i] && root.children[i].isEnd) {
                current = getFirstWord(root[i], current + buildChar(i));
                if (current) {
                    return current;
                }
            }
            else {
                return '';
            }
        }

        return root.children.length === 0 && root.isEnd ? current : '';
    }

    function buildChar(i: number) {
        return String.fromCharCode(i + 'a'.charCodeAt(0));
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});






