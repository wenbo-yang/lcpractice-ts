xdescribe('leetcode 837: new 21 game', () => {
    function new21Game(n: number, k: number, maxPts: number): number {
        const mem: number[] = new Array(k).fill(0);

        return dfs(0, n, k, maxPts, mem);
    };

    function dfs(i: number, n: number, k: number, maxPts: number, mem: number[]): number {
        if (i >= k) {
            return i <= n ? 1 : 0;
        }
        // Edge case: When we're at the last draw that might push the score over k
        if (i === k - 1) {
            // The probability will be the fraction of possible points that won't exceed n
            return Math.min(n - k + 1, maxPts) / maxPts;
        }
        // If the value is already computed, return it to avoid re-calculation
        if (mem[i] !== 0) {
            return mem[i];
        }
        
        mem[i] = dfs(i + 1, n, k, maxPts, mem) + (dfs(i + 1, n,k,maxPts, mem) - dfs(i + maxPts + 1, n, k, maxPts, mem)) / maxPts;
        return mem[i];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


