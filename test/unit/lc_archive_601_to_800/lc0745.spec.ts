xdescribe('leetcode 745: description', () => {
    class TrieNode {
        char: string = '';
        indices: number[] = [];
        end: boolean = false;
        children: TrieNode[] = new Array<TrieNode>(26);
        constructor(char: string, index: number) {
            this.char = char;
            this.indices.push(index);
        }
    }

    class TrieTree {
        root: TrieNode = new TrieNode('', -1);

        insert(w: string, index: number) {
            let node = this.root;

            for (const c of w) {
                if (!node.children[this.getCharIndex(c)]) {
                    node.children[this.getCharIndex(c)] = new TrieNode(c, index);
                }
                node = node.children[this.getCharIndex(c)];
            }

            node.end = true;
        }

        searchForIndices(prefix: string): number[] {
            let node = this.root;

            for (const c of prefix) {
                if(node.children[this.getCharIndex(c)]) {
                    node = node.children[this.getCharIndex(c)];
                }
                else {
                    return [];
                }
            }

            return node.indices;
        }

        getCharIndex(c: string): number {
            return c.charCodeAt(0) - 'a'.charCodeAt(0);
        }

    }

    
    class WordFilter {
        prefix: TrieTree = new TrieTree();
        suffix: TrieTree = new TrieTree();


        constructor(words: string[]) {
            for(let i = 0; i < words.length; i++) {
                this.prefix.insert(words[i], i);
                this.suffix.insert(words[i].split('').reverse().join(''), i);
            }
        }
    
        filter(pref: string, suff: string): number {
            const arr1 = this.prefix.searchForIndices(pref);
            const set2 = new Set<number>(this.suffix.searchForIndices(suff.split('').reverse().join()));

            const intersection = arr1.filter(it => set2.has(it));

            return intersection[intersection.length -1];
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
s