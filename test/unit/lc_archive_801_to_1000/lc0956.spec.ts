xdescribe('leetcode 956: tallest billboard', () => {
    function tallestBillboard(rods: number[]): number {
        const totalLength = rods.reduce((acc, rod) => acc + rod, 0);
        const numRods = rods.length;
        const dpTable = new Array(numRods).fill(0).map(() => new Array(totalLength + 1).fill(-1));

        const depthFirstSearch = (currentIndex: number, currentDifference: number): number => {
            if (currentIndex >= numRods) {
                return currentDifference === 0 ? 0 : Number.MIN_SAFE_INTEGER;
            }
            if (dpTable[currentIndex][currentDifference] !== -1) {
                return dpTable[currentIndex][currentDifference];
            }
        
            let maxHeight = Math.max(depthFirstSearch(currentIndex + 1, currentDifference),
                                    depthFirstSearch(currentIndex + 1, currentDifference + rods[currentIndex]));
            maxHeight = Math.max(maxHeight,
                                depthFirstSearch(currentIndex + 1, Math.abs(currentDifference - rods[currentIndex]))
                                + Math.min(currentDifference, rods[currentIndex]));
            return (dpTable[currentIndex][currentDifference] = maxHeight);
        };

        return depthFirstSearch(0, 0);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
