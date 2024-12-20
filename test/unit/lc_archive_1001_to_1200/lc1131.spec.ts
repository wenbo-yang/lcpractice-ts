xdescribe('leetcode 1131: maximum of absolute value expression', () => {
    function maxAbsValExpr(arr1: number[], arr2: number[]): number {
        const multipliers = [1, -1, -1, 1, 1];
  
        let maxAnswer = Number.MIN_SAFE_INTEGER;
    
        for (let expIndex = 0; expIndex < 4; ++expIndex) {
            const coeffA = multipliers[expIndex];
            const coeffB = multipliers[expIndex + 1];
    
            let maxCurrent = Number.MIN_SAFE_INTEGER;
            let minCurrent = Number.MAX_SAFE_INTEGER;
            for (let i = 0; i < arr1.length; ++i) {
                const val1 = arr1[i];
                const val2 = arr2[i];
    
                const expression = coeffA * val1 + coeffB * val2 + i;
    
                maxCurrent = Math.max(maxCurrent, expression);
                minCurrent = Math.min(minCurrent, expression);
    
                maxAnswer = Math.max(maxAnswer, maxCurrent - minCurrent);
            }
        }
      
        return maxAnswer;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
