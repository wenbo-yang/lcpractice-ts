xdescribe('leetcode 1335: min difficulty of a job schedule', () => {
    function minDifficulty(jobDifficulty: number[], days: number): number {
        const numOfJobs = jobDifficulty.length; // number of jobs
        const INF = 1 << 30; // represents an infinite difficulty, used as an initial value
        const dp: number[][] = new Array(numOfJobs + 1)
            .fill(0)
            .map(() => new Array(days + 1).fill(INF)); // initialize the dp array
        dp[0][0] = 0; // base case: 0 jobs done in 0 days has a difficulty of 0
    
        // Populate the dp table
        for (let i = 1; i <= numOfJobs; ++i) {
            for (let j = 1; j <= Math.min(days, i); ++j) { // Each job can only be scheduled if we have enough days
                let maxDifficulty = 0; // tracks the maximum difficulty of the current job set
    
                // Loop to find the minimum difficulty if the current job ends the current day
                for (let k = i; k > 0; --k) {
                    maxDifficulty = Math.max(maxDifficulty, jobDifficulty[k - 1]);
                    dp[i][j] = Math.min(dp[i][j], dp[k - 1][j - 1] + maxDifficulty);
                }
            }
        }
    
        // Return the minimum difficulty to complete all jobs in the given days
        // If it's still INF, it means it's impossible to schedule all jobs, hence return -1
        return dp[numOfJobs][days] < INF ? dp[numOfJobs][days] : -1;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
