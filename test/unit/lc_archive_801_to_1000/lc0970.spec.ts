xdescribe('leetcode 970: powerful integers', () => {
    function powerfulIntegers(x: number, y: number, bound: number): number[] {
        const uniqueSums = new Set<number>();
        for (let powerOfX = 1; powerOfX <= bound; powerOfX *= x) {
            for (let powerOfY = 1; powerOfX + powerOfY <= bound; powerOfY *= y) {
                uniqueSums.add(powerOfX + powerOfY);
    
                if (y === 1) {
                    break;
                }
            }
    
            if (x === 1) {
                break;
            }
        }
    
        return Array.from(uniqueSums);    
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
