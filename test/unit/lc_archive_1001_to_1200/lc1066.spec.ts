xdescribe('leetcode 1066: campus bikes', () => {
    function assignBikes(workers: number[][], bikes: number[][]): number {
        const numWorkers = workers.length;
        const numBikes = bikes.length;
        const INF = 1 << 30;
        const minDistances: number[][] = new Array(numWorkers + 1)
                                         .fill(0)
                                         .map(() => new Array(1 << numBikes).fill(INF));
        minDistances[0][0] = 0;
    
        for (let workerIndex = 1; workerIndex <= numWorkers; ++workerIndex) {
            for (let mask = 0; mask < (1 << numBikes); ++mask) {
                for (let bikeIndex = 0; bikeIndex < numBikes; ++bikeIndex) {
                    if (((mask >> bikeIndex) & 1) === 1) {
                        const distance = Math.abs(workers[workerIndex - 1][0] - bikes[bikeIndex][0]) +
                                         Math.abs(workers[workerIndex - 1][1] - bikes[bikeIndex][1]);
                        const prevMask = mask ^ (1 << bikeIndex);
    
                        minDistances[workerIndex][mask] = Math.min(minDistances[workerIndex][mask],
                                                                   minDistances[workerIndex - 1][prevMask] + distance);
                    }
                }
            }
        }
        
        return Math.min(...minDistances[numWorkers]);
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
