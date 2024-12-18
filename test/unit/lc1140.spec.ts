xdescribe('leetcode 1140: stone game II', () => {
    function stoneGameII(piles: number[]): number {
        const pileCount = piles.length;
        const memoTable = Array.from({ length: pileCount }, () => new Array(pileCount + 1).fill(0));
    
        const prefixSum = new Array(pileCount + 1).fill(0);
        for (let i = 0; i < pileCount; ++i) {
            prefixSum[i + 1] = prefixSum[i] + piles[i];
        }
    
        return dfs(0, 1, memoTable, prefixSum, pileCount);
    };

    function dfs(currentIndex: number, currentM: number, memoTable: number[][], prefixSum: number[], pileCount: number): number {
        if (currentM * 2 >= pileCount - currentIndex) {
            return prefixSum[pileCount] - prefixSum[currentIndex];
        }
    
        if (memoTable[currentIndex][currentM]) {
            return memoTable[currentIndex][currentM];
        }
    
        let maxStones = 0;
        for (let x = 1; x <= currentM * 2; ++x) {
            maxStones = Math.max(maxStones, prefixSum[pileCount] - prefixSum[currentIndex] - dfs(currentIndex + x, Math.max(currentM, x), memoTable, prefixSum, pileCount));
        }
        memoTable[currentIndex][currentM] = maxStones;
        return maxStones;
    };



    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
