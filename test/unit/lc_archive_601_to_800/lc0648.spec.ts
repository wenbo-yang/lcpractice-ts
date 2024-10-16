xdescribe('leetcode 648: description', () => {
    class TrieNode {
        prefix: string = '';
        isEnd: boolean = false;
        children: TrieNode[] = new Array<TrieNode>(26);
    
        constructor(prefix: string, isEnd: boolean) {
            this.prefix = prefix;
            this.isEnd = isEnd;
        }
    }

    class TrieTree {
        root: TrieNode = new TrieNode('', false);

        insert(w: string) {
            let node = this.root;

            let prefix = ''
            for (const c of w) {
                const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
                if (!node.children[index]) {
                    prefix += c;
                    node.children[index] = new TrieNode(prefix, false);
                }
                node = node.children[index];
            }

            node.isEnd = true;
        }

        findShortest(w: string): string {
            let node = this.root;

            for (const c of w) {
                const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
                if (node.isEnd) {
                    break;
                }

                if (node.children[index]) {
                    node = node.children[index];
                }
                else {
                    return w;
                }
            }

            return node.prefix;
        }
    }
    
    
    function replaceWords(dictionary: string[], sentence: string): string {
        const trieTree = new TrieTree;
        for (const w of dictionary) {
            trieTree.insert(w);
        }

        const split = sentence.split(' ');

        const result: string[] = [];
        for (const w of split) {
            result.push(trieTree.findShortest(w));
        }

        return result.join(' ');
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});