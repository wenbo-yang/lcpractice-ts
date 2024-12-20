xdescribe('leetcode 1058: minimize rounding error to meet target', () => {
    function minimizeError(prices: string[], target: number): string {
        let floorSum: number = 0;
        let fractions: number[] = [];
    
        prices.forEach(priceStr => {
            let price: number = parseFloat(priceStr);
            floorSum += Math.floor(price);
            let fraction: number = price - Math.floor(price);
    
            if (fraction > 0) {
                fractions.push(fraction);
            }
        });
    
        if (target < floorSum || target > floorSum + fractions.length) {
            return "-1";
        }
    
        let ceilCount: number = target - floorSum;
    
        fractions.sort((a, b) => b - a);
    
        let errorSum: number = ceilCount;
        for (let i = 0; i < ceilCount; i++) {
            errorSum -= fractions[i]; 
        }
        for (let i = ceilCount; i < fractions.length; i++) {
            errorSum += fractions[i];
        }
    
        let errorStr: string = errorSum.toFixed(3);
    
        return errorStr;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
