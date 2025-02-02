xdescribe('leetcode 1385: find the distance value between two arrays', () => {
    function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
        const isElementDistanceValid = (value: number): boolean => {
            let left = 0;
            let right = arr2.length;
            while (left < right) {
                const middle = Math.floor((left + right) / 2);
                if (arr2[middle] >= value - d) {
                    right = middle;
                } else {
                    left = middle + 1;
                }
            }
            return left === arr2.length || arr2[left] > value + d;
        };
    
        arr2.sort((a, b) => a - b);
        let validElementCount = 0;
        for (const value of arr1) {
            if (isElementDistanceValid(value)) {
                validElementCount++;
            }
        }
        
        return validElementCount;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
