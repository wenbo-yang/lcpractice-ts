xdescribe('leetcode 1223: dice roll simulation', () => {
    const MOD: number = 1e9 + 7; 
    let dp: number[][][] = [];
    for (let i = 0; i <= 15; i++) { 
      dp[i] = [];
      for (let j = 0; j <= 6; j++) {
        dp[i][j] = [];
      }
    }
    
    const dfs = (rollCount: number, lastNumber: number, consecutiveCount: number, rollMax: number[], n: number): number => {
      if (rollCount >= n) { 
        return 1;
      }
      if (dp[rollCount][lastNumber][consecutiveCount] !== undefined) { 
        return dp[rollCount][lastNumber][consecutiveCount];
      }
      let totalWays: number = 0; 
      for (let face = 1; face <= 6; ++face) {
        if (face !== lastNumber) { 
          totalWays = (totalWays + dfs(rollCount + 1, face, 1, rollMax, n)) % MOD; 
        } else if (consecutiveCount < rollMax[lastNumber - 1]) { 
          totalWays = (totalWays + dfs(rollCount + 1, lastNumber, consecutiveCount + 1, rollMax, n)) % MOD; 
        }
      }
      return dp[rollCount][lastNumber][consecutiveCount] = totalWays; 
    };
    
    const dieSimulator = (n: number, rollMax: number[]): number => {
      dp = Array.from({length: n}, () => 
              Array.from({length: 7}, () => 
                Array(16).fill(undefined)));
    
      return dfs(0, 0, 0, rollMax, n);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
