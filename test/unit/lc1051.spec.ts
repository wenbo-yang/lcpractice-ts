xdescribe('leetcode 1051: height checker', () => {
    function heightChecker(heights: number[]): number {
        const sortedHeights = [...heights];
        sortedHeights.sort((a, b) => a - b);
    
        let misplacedCount: number = 0;
    
        for (let i = 0; i < heights.length; i++) {
            if (heights[i] !== sortedHeights[i]) {
                misplacedCount++;
            }
        }
    
        return misplacedCount;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
