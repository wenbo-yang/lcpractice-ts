xdescribe('leetcode 1057: campus bikes', () => {
    function calculateManhattanDistance(worker: number[], bike: number[]): number {
        return Math.abs(worker[0] - bike[0]) + Math.abs(worker[1] - bike[1]);
    }
    
    function assignBikes(workers: number[][], bikes: number[][]): number[] {
        const numWorkers: number = workers.length;
        const numBikes: number = bikes.length;
        const allPairs: [number, number, number][] = [];
    
        for (let workerIndex = 0; workerIndex < numWorkers; ++workerIndex) {
            for (let bikeIndex = 0; bikeIndex < numBikes; ++bikeIndex) {
                const distance: number = calculateManhattanDistance(workers[workerIndex], bikes[bikeIndex]);
                allPairs.push([distance, workerIndex, bikeIndex]);
            }
        }
        allPairs.sort((a, b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0];
            }
            if (a[1] !== b[1]) {
                return a[1] - b[1];
            }
            return a[2] - b[2];
        });
    
        const workerVisited: boolean[] = new Array(numWorkers).fill(false);
        const bikeVisited: boolean[] = new Array(numBikes).fill(false);
    
        const answer: number[] = new Array(numWorkers).fill(-1);
    
        for (const [distance, workerIndex, bikeIndex] of allPairs) {
            if (!workerVisited[workerIndex] && !bikeVisited[bikeIndex]) {
                workerVisited[workerIndex] = true;
                bikeVisited[bikeIndex] = true;
                answer[workerIndex] = bikeIndex;
            }
        }

        return answer;
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
