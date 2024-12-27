xdescribe('leetcode 1231: divide chocolate', () => {
    function maximizeSweetness(sweetness: number[], k: number): number {
        let left = 0; 
        let right = sweetness.reduce((a, b) => a + b);

        const canSplit = (minimumSweetness: number): boolean => {
            let currentSweetness = 0;
            let partsCount = 0;
            for (const value of sweetness) {
                currentSweetness += value; 
                if (currentSweetness >= minimumSweetness) {
                    currentSweetness = 0; 
                    partsCount++; 
                }
            }
            
            return partsCount > k;
        };

        while (left < right) {
            const mid = (left + right + 1) >> 1; 
            if (canSplit(mid)) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        
        return left;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
