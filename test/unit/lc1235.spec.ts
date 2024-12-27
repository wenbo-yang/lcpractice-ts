xdescribe('leetcode 1235: maximum profit in job scheduling', () => {
    function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
        const jobCount = startTime.length; 
        const dp = new Array(jobCount).fill(0); 
        const jobIndices = new Array(jobCount).fill(0).map((_, index) => index); 
      
        jobIndices.sort((a, b) => startTime[a] - startTime[b]);
      
        const findNextJobIndex = (endTimeToMatch: number): number => {
            let left = 0;
            let right = jobCount;
            while (left < right) {
                const mid = (left + right) >> 1;
                if (startTime[jobIndices[mid]] >= endTimeToMatch) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
    
            return left;
        };
    
        const calculateMaxProfit = (currentJob: number): number => {
            if (currentJob >= jobCount) {
                return 0; 
            }
            if (dp[currentJob] !== 0) {
                return dp[currentJob]; 
            }
            const nextJobIndex = findNextJobIndex(endTime[jobIndices[currentJob]]);
            return dp[currentJob] = Math.max(
                calculateMaxProfit(currentJob + 1), 
                calculateMaxProfit(nextJobIndex) + profit[jobIndices[currentJob]]
            );
        };
    
        return calculateMaxProfit(0);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
