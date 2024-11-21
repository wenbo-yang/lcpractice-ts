import { MaxHeap } from "../commonLibs";

xdescribe('leetcode 857: min cost to hire k workers', () => {
    function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
        let numWorkers = quality.length;
        let workerRatios: Array<{ ratio: number; workerQuality: number }> = [];

        for (let i = 0; i < numWorkers; ++i) {
            workerRatios.push({ ratio: wage[i] / quality[i], workerQuality: quality[i] });
        }
    
        workerRatios.sort((a, b) => a.ratio - b.ratio);
    
        let qualityMaxHeap: MaxHeap<number> = new MaxHeap(); 
        let minCost: number = Number.MAX_VALUE; 
        let totalQuality: number = 0; 
    
        workerRatios.forEach(worker => {
            totalQuality += worker.workerQuality; 
            qualityMaxHeap.push(worker.workerQuality);
        
            if (qualityMaxHeap.length > k) {
                const top = qualityMaxHeap.peek(); 
                totalQuality -= top; 
                qualityMaxHeap.pop(); 
            }
        
            // Once we have exactly k workers, calculate the cost of hiring the group
            if (qualityMaxHeap.length === k) {
                minCost = Math.min(minCost, totalQuality * worker.ratio);
            }
        });

        // Return the minimum cost found for hiring k workers.
        return minCost;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
