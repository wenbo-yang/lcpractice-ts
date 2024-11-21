xdescribe('leetcode 891: sum of subsequence widths', () => {
    function sumSubseqWidths(nums: number[]): number {
        const MOD: number = 1e9 + 7;
        nums.sort((a, b) => a - b);
        let answer: number = 0; 
        let powerOfTwo: number = 1; 
        const n: number = nums.length;
      
        
        for (let i = 0; i < n; ++i) {
            answer = (answer + ((nums[i] - nums[n - i - 1]) * powerOfTwo) % MOD + MOD) % MOD;
          
            powerOfTwo = (powerOfTwo * 2) % MOD;
        }
      
        // Return the answer as per function signature
        return answer;
        
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
