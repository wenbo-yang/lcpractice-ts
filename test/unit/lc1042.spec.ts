xdescribe('leetcode 1042: flower planting with no adjacent', () => {
    function gardenNoAdj(n: number, paths: number[][]): number[] {
        const graph: number[][] = new Array(n).fill(0).map(() => []);
        for (const [garden1, garden2] of paths) {
            graph[garden1 - 1].push(garden2 - 1);
            graph[garden2 - 1].push(garden1 - 1);
        }
        
        const flowerTypes: number[] = new Array(n).fill(0);
        for (let currentGarden = 0; currentGarden < n; ++currentGarden) {
            const usedFlowerTypes: boolean[] = new Array(5).fill(false);
            for (const adjacentGarden of graph[currentGarden]) {
                usedFlowerTypes[flowerTypes[adjacentGarden]] = true;
            }
            for (let flowerType = 1; flowerType < 5; ++flowerType) {
                if (!usedFlowerTypes[flowerType]) {
                    flowerTypes[currentGarden] = flowerType;
                    break;
                }
            }
        }
        
        return flowerTypes;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
