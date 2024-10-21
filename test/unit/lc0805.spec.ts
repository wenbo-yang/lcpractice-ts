xdescribe('leetcode 805: split array with same average', () => {
    function splitArraySameAverage(nums: number[]): boolean {
        //  [a1, a2, a3 ...] sum / length
        //  [b1, b2, b3, ...] sum / length
        let size = nums.length;

        
        if (size === 1) {
            return false;
        }
    
        let totalSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
        nums = nums.map(value => value * size - totalSum);
    
        let halfSize = Math.floor(size / 2);
    
        let sumsFirstHalf = new Set<number>();

    
        // Compute the sums of all possible subsets for the first half of the array
        sumsFirstHalf = computeSubsetSums(nums.slice(0, halfSize));
    
        if (sumsFirstHalf.has(0)) {
            return true;
        }
    
        // Compute the sums of all possible subsets for the second half of the array
        let sumsSecondHalf = computeSubsetSums(nums.slice(halfSize));
    
        // Check if either of the current subset sums to zero or they add up to a zero sum
        // with a subset sum from the other half. If so, we can split the array satisfying the condition.
        for (let sum of sumsSecondHalf) {
            if (sum === 0 || sumsFirstHalf.has(-sum)) {
                return true;
            }
        }
    
        // If none of the subsets satisfy the criteria, return false
        return false;

    };

        
    function computeSubsetSums(arr: number[]): Set<number> {
        let subsetSums = new Set<number>();
        let subsetsCount = 1 << arr.length; // Total subsets for the given array

        for (let i = 1; i < subsetsCount; i++) {
            let currentSum = 0;
          
            for (let j = 0; j < arr.length; j++) {
                if ((i >> j) & 1) {
                    currentSum += arr[j];
                }
            }

            if (currentSum === 0) {
                return new Set([0]);
            }
          
            subsetSums.add(currentSum);
        }
      
        return subsetSums;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
