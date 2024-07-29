xdescribe('leetcode 294: flip game', () => {
    class Solution {
        private n: number = 0;
        private memo = new Map<number, boolean>();
    
        public canWin(currentState: string): boolean {
            let mask: number = 0;
            this.n = currentState.length;
            for (let i = 0; i < this.n; ++i) {
                if (currentState.charAt(i) == '+') {
                    mask |= 1 << i;
                }
            }
            return this.dfs(mask);
        }
    
        private dfs(mask: number): boolean {
            if (this.memo.has(mask)) {
                return this.memo.get(mask) || false;
            }
            for (let i = 0; i < this.n - 1; ++i) {
                if ((mask & (1 << i)) == 0 || (mask & (1 << (i + 1))) == 0) {
                    continue;
                }
                if (this.dfs(mask ^ (1 << i) ^ (1 << (i + 1)))) {
                    continue;
                }
                this.memo.set(mask, true);
                return true;
            }
            this.memo.set(mask, false);
            return false;
        }
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
