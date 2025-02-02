xdescribe('leetcode 1248: count number of nice subarrays', () => {
    function numberOfSubarrays(nums: number[], k: number): number {
        const arrayLength = nums.length;
  
        const countOfSubarrays = new Array(arrayLength + 1).fill(0);
      
        countOfSubarrays[0] = 1;
      
        let numberOfValidSubarrays = 0;
      
        let totalOdds = 0;
      
        for (const value of nums) {
            totalOdds += value & 1;
            if (totalOdds - k >= 0) {
                numberOfValidSubarrays += countOfSubarrays[totalOdds - k];
            }
          
            countOfSubarrays[totalOdds] += 1;
        }
      
        return numberOfValidSubarrays;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
