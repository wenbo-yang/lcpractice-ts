xdescribe('leetcode 1217: minimum cost to move chips to the same position', () => {
    function minCostToMoveChips(position: number[]): number {
        let oddCount: number = 0;
        for (const p of position) {
            oddCount += p % 2;
        }
        let evenCount: number = position.length - oddCount;
        
        return Math.min(oddCount, evenCount);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
