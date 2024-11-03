xdescribe('leetcode 926: minimum flip to monotone increasing', () => {
    function minFlipsMonoIncr(s: string): number {
        const n: number = s.length;
        let prefixSum: number[] = new Array(n + 1).fill(0);
    
        for (let i = 0; i < n; ++i) {
            prefixSum[i + 1] = prefixSum[i] + (s[i] === '1' ? 1 : 0);
        }
    
        let minFlips: number = prefixSum[n]; 
        for (let i = 0; i < n; ++i) {
            const flipsIfSplitHere: number = prefixSum[i] + (n - i - (prefixSum[n] - prefixSum[i]));
            minFlips = Math.min(minFlips, flipsIfSplitHere);
        }
    
        return minFlips;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
