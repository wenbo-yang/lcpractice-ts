xdescribe('leetcode 758: bold string', () => {
    class Trie {
        children = new Trie[128];
        isEnd: boolean = false;
    
        insert(word: string): void {
            let node = this;
            for (const c of word) {
                if (node.children[c] == null) {
                    node.children[c] = new Trie();
                }
                node = node.children[c];
            }
            node.isEnd = true;
        }
    }
    
    function boldWords(words: string[], s: string): string {
        const trie = new Trie();
        for (const w of words) {
            trie.insert(w);
        }
        const pairs: number[][] = [];
        const n = s.length;
        for (let i = 0; i < n; ++i) {
            let node = trie;
            for (let j = i; j < n; ++j) {
                let idx = s.charAt(j);
                if (!node.children[idx]) {
                    break;
                }
                node = node.children[idx];
                if (node.isEnd) {
                    pairs.push([i, j]);
                }
            }
        }
        if (pairs.length === 0) {
            return s;
        }
        const t: number[][] = [];
        let st = pairs[0][0], ed = pairs[0][1];
        for (let j = 1; j < pairs.length; ++j) {
            let a = pairs[j][0], b = pairs[j][1];
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
        const ans: string[] = [];
        while (i < n) {
            if (j === t.length) {
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
        return ans.join();
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
