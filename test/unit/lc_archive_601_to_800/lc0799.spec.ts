xdescribe('leetcode 799: champagne tower', () => {
    function champagneTower(poured: number, queryRow: number, queryGlass: number): number {
        let currentRow = [poured];

        for (let rowIndex = 1; rowIndex <= queryRow; rowIndex++) {
            
            const nextRow = new Array(rowIndex + 1).fill(0);
    
            for (let glassIndex = 0; glassIndex < rowIndex; glassIndex++) {
                if (currentRow[glassIndex] > 1) {
                    const overflow = (currentRow[glassIndex] - 1) / 2;
                    nextRow[glassIndex] += overflow;
                    nextRow[glassIndex + 1] += overflow;
                }
            }
            
            currentRow = nextRow;
        }
    
        // Return the amount of champagne in the specified glass, capped at 1 because glasses can't hold
        // more than one unit of champagne
        return Math.min(1, currentRow[queryGlass]);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
