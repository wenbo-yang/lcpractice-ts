xdescribe('leetcode 291: word pattern II', () => {

    class Solution {
        private vis: Set<string> = new Set();
        private d: Map<string, string> = new Map();
        private pattern: string = '';
        private s: string = '';
        private m: number = 0;
        private n: number = 0;
    
        public wordPatternMatch(pattern: string, s: string): boolean {

            this.pattern = pattern;
            this.s = s;
            this.m = pattern.length;
            this.n = s.length;
            return this.dfs(0, 0);
        }
    
        private dfs(i: number, j: number): boolean {
            if (i === this.m && j === this.n) {
                return true;
            }
            if (i === this.m || j === this.n || this.m - i > this.n - j) {
                return false;
            }
            const c = this.pattern[i];
            for (let k = j + 1; k <= this.n; ++k) {
                const t = this.s.substring(j, k);
                if ((this.d.get(c) || '') === t) {
                    if (this.dfs(i + 1, k)) {
                        return true;
                    }
                }
                if (!this.d.has(c) && !this.vis.has(t)) {
                    this.d.set(c, t);
                    this.vis.add(t);
                    if (this.dfs(i + 1, k)) {
                        return true;
                    }
                    this.vis.delete(t);
                    this.d.delete(c);
                }
            }
            return false;
        }
    }
    function wordPattern(pattern: string, s: string): boolean {
        const vis = new Set<string>();
        const dict = new Map<string, string>();
        
        return new Solution().wordPatternMatch(pattern, s);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
