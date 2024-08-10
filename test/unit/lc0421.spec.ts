xdescribe('leetcode 421: description', () => {
    class Trie {
        children: Trie[] = new Array<Trie>();
    }
    
    function maximumXOR(nums: number[]): number {
        const root: Trie = new Trie();
        
        for (let num of nums) {
            let node = root;
            for (let i = 0; i <= 31; i++) {
                if ((num & 0x80000000) > 0) {
                    if (!node.children[1]) {
                        node.children[1] = new Trie();
                        node = node.children[1];
                    }
                    else {
                        node.children[0] = new Trie();
                        node = node.children[0];
                    }
                }
                num = num << 1
            }
        }

        let max = 0;
        for (const num of nums) {
            let sum = 0;
            let node = root;
            for (let i = 31; i >= 0; --i) {
                let bit = (num >> i) & 1;
                if (node.children[1 - bit]) {
                  sum += (1 << i);
                  node = node.children[1 - bit];
                } else {
                  node = node.children[bit];
                }
            }

            max = Math.max(max, sum);
        }

        return max;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});