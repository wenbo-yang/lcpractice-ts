xdescribe('leetcode 818: race car', () => {
    function racecar(target: number): number {
        let dp: number[] = new Array(target + 1);        
        for (let position = 1; position <= target; ++position) {
          let bitLength: number =  Math.floor(Math.log2(position)) + 1;
      
          if (position === (1 << bitLength) - 1) {
            dp[position] = bitLength;
            continue;
          }
      
          dp[position] = bitLength + 1 + dp[(1 << bitLength) - 1 - position]; // "+ 1" for the reverse operation
      
          for (let backSteps = 0; backSteps < bitLength; ++backSteps) {
            let distanceCovered: number = (1 << (bitLength - 1)) - (1 << backSteps);
            dp[position] = Math.min(dp[position],
                                    dp[position - distanceCovered] + bitLength - 1 + backSteps + 2); // "+ 2" for two reverse operations
          }
        }
      
        
        return dp[target];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
