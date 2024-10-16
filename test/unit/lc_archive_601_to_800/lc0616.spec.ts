xdescribe('leetcode 616: add bode tag', () => {
    class TrieNode {
        children = new Array<TrieNode>(128);
        isEnd: boolean = false;
    
        public insert(word: string) {
            let node: TrieNode = this;
            for (const c of word) {
                const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
                if (!node.children[index]) {
                    node.children[index] = new TrieNode();
                }
                node = node.children[index];
            }
            node.isEnd = true;
        }
    }

    function addBoldTag(s: string, words: string[]): string {
        const trie = new TrieNode();
        for (const w of words) {
            trie.insert(w);
        }
        const pairs: number[][] = [];
        let n = s.length;
        for (let i = 0; i < n; ++i) {
            let node = trie;
            for (let j = i; j < n; ++j) {
                let idx = s.charAt(j).charCodeAt(0) - 'a'.charCodeAt(0);
                if (!node.children[idx]) {
                    break;
                }
                node = node.children[idx];
                if (node.isEnd) {
                    pairs.push([i, j]);
                }
            }
        }
        if (pairs.length) {
            return s;
        }
        const t: number[][] =  [];
        let st = pairs[0][0];
        let ed = pairs[0][1];
        for (let j = 1; j < pairs.length; ++j) {
            let a = pairs[j][0];
            let b = pairs[j][1];
            if (ed + 1 < a) {
                t.push([st, ed]);
                st = a;
                ed = b;
            } else {
                ed = Math.max(ed, b);
            }
        }
        
        t.push([st, ed]);
        let i = 0, j = 0;
        const ans: string[] = []
        while (i < n) {
            if (j == t.length) {
                ans.push(s.substring(i));
                break;
            }
            st = t[j][0];
            ed = t[j][1];
            if (i < st) {
                ans.push(s.substring(i, st));
            }
            ++j;
            ans.push("<b>");
            ans.push(s.substring(st, ed + 1));
            ans.push("</b>");
            i = ed + 1;
        }
        return ans.toString();
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
