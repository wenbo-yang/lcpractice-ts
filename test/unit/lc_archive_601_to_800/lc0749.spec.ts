xdescribe('leetcode 749: contain virus', () => {
    function containVirus(isInfected: number[][]): number {
        const numberOfIslands = mapIsland(isInfected);
        const pm = initializePremeter(isInfected);

        let hasUpdates = true;
        let currentNumberOfWalls = 0;
        while (hasUpdates) {
            const islandPerimters: number[][] = [];

            for (const entry of pm.entries()) {
                const perimeters = getNeighborsToBeInfected(isInfected, entry[1]);
                pm.set(entry[0], perimeters);
            }

            const arr = Array.from(pm.entries()).sort((a,b) => a[1].length - b[1].length);
            const last = arr[arr.length - 1];
            if (last[1].length === 0) {
                hasUpdates = false;
            }
            else {
                currentNumberOfWalls += last[1].length;
                pm.delete(last[0]);

                updateIsland(isInfected, pm);
            }
        }


        return currentNumberOfWalls;
    };

    function updateIsland(isInfected: number[][], pm: Map<number, number[][]>) {
        for (const entry of pm.entries()) {
            for (const coor of entry[1]) {
                isInfected[coor[0]][coor[1]] = entry[0];
            }
        }
    }

    function getNeighborsToBeInfected(isInfected: number[][], perimeters: number[][]): number[][] {
        const neighbors: number[][] = [];

        for (const cell of perimeters) {
            if (isInfected[cell[0] + 1][cell[1]] === 0) {
                neighbors.push([cell[0] + 1, cell[1]]);
            }
            if (isInfected[cell[0] - 1][cell[1]] === 0) {
                neighbors.push([cell[0] - 1, cell[1]]);
            }
            if (isInfected[cell[0]][cell[1] + 1] === 0) {
                neighbors.push([cell[0], cell[1] + 1]);
            }
            if (isInfected[cell[0]][cell[1] - 1] === 0) {
                neighbors.push([cell[0], cell[1] - 1]);
            }
        }

        return neighbors;
    }

    function mapIsland(isInfected: number[][]): number {
        let islandNumber = 1;
        const visited = new Array<Array<boolean>>(isInfected.length).fill([]).map(r => new Array<boolean>(isInfected[0].length).fill(false));
        for (let i = 0; i < isInfected.length; i++) {
            for (let j = 0; j < isInfected[0].length; j++) {
                if (isInfected[i][j] !== 0 && !visited[i][j]) {
                    mapIslandHelper(isInfected, i, j, islandNumber, visited);
                    islandNumber++;
                }
            }
        }

        return islandNumber - 1;
    }

    function mapIslandHelper(isInfected: number[][], i: number, j: number, islandNumber: number, visited: boolean[][]) {
        if (i < 0 || i >= isInfected.length || j < 0 || j >= isInfected[0].length || isInfected[i][j] === 0 || visited[i][j]) {
            return;
        }

        visited[i][j] = true;
        isInfected[i][j] = islandNumber;

        mapIslandHelper(isInfected, i + 1, j, islandNumber, visited);
        mapIslandHelper(isInfected, i - 1, j, islandNumber, visited);
        mapIslandHelper(isInfected, i, j + 1, islandNumber, visited);
        mapIslandHelper(isInfected, i, j - 1, islandNumber, visited);
    }

    function initializePremeter(isInfected: number[][]): Map<number, number[][]> {
        const islandPerimeters = new Map<number, number[][]>();

        for (let i = 0; i < isInfected.length; i++) {
            for (let j = 0; j < isInfected[0].length; j++) {
                if (isInfected[i][j] !== 0 && isOnIslandPerimeter(isInfected, i, j)) {
                    const perimeter = islandPerimeters.get(isInfected[i][j]) || [];
                    perimeter.push([i, j]);
                    islandPerimeters.set(isInfected[i][j], perimeter);
                }
            }
        }

        return islandPerimeters;
    }
    
    function isOnIslandPerimeter(isInfected: number[][], i: number, j: number): boolean {
        return isInfected[i + 1][j] === 0 || isInfected[i - 1][j] === 0 || isInfected[i][j + 1] === 0 || isInfected[i][j - 1] === 0
    }
    
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



