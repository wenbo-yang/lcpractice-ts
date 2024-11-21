xdescribe('leetcode 853: description', () => {
    function carFleet(target: number, position: number[], speed: number[]): number {
        const numCars = position.length; 
        const sortedIndices = Array.from({ length: numCars }, (_, index) => index)
                                .sort((indexA, indexB) => position[indexB] - position[indexA]);
    
        let fleetCount = 0; 
        let previousTimeToTarget = 0; 
    
        for (const index of sortedIndices) {
            const currentTimeToTarget = (target - position[index]) / speed[index];
        
            if (currentTimeToTarget > previousTimeToTarget) {
                fleetCount++; 
                previousTimeToTarget = currentTimeToTarget; 
            }
        }
    
        return fleetCount;

    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
