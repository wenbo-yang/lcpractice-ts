xdescribe('leetcode 826: most profit', () => {
    function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
        const numJobs = difficulty.length;
        const jobs: {difficulty: number, profit: number}[] = [];

        for (let i = 0; i < numJobs; i++) {
            jobs.push({ difficulty: difficulty[i], profit: profit[i] });
        }

        jobs.sort((a, b) => a.difficulty - b.difficulty);

        worker.sort((a,b) => a - b);

        let maxProfit = 0; 
        let jobIndex = 0;  
        let bestProfit = 0; 

        for (const workerAbility of worker) {
            while (jobIndex < numJobs && jobs[jobIndex].difficulty <= workerAbility) {
                bestProfit = Math.max(bestProfit, jobs[jobIndex].profit)!;
                jobIndex++;
            }
            maxProfit += bestProfit;
        }

        return maxProfit; 
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
