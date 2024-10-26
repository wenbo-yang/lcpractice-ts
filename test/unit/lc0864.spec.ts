xdescribe('leetcode 864: shortest path to get all keys', () => {
    function shortestPathAllKeys(grid: string[]): number {
        const keys = getKeys(grid);
        const startingCoor = getStartingCoordinates(grid);
        // start with starting position,
        // iterate through keys.
        // get the shortest path to key (bfs) 
        // set new coordinate, new set of keys, and modified grid, and pass down (dfs)
        let index = 0;
        const newGrid = new Array<Array<string>>(grid.length).fill([]).map(r => grid[index++].split(''));
        const shortest = getShortestPathDfs(startingCoor, keys, newGrid);

        return shortest === Number.MAX_SAFE_INTEGER ? -1 : shortest;
    };

    function getKeys(grid: string[]): {key: string, coor: number[]}[] {
        const keys: {key: string, coor: number[]}[] = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (!['.','#', '@'].includes(grid[i][j]) && grid[i][j].toLowerCase() === grid[i][j]) {
                    keys.push({key: grid[i][j], coor: [i, j]});
                }
            }
        }

        return keys;
    }
    
    function getStartingCoordinates(grid: string[]): number[] {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === '@') {
                    return [i, j]
                }
            }
        }

        return [-1, -1]
    }
    
    function getShortestPathDfs(startingCoor: number[], keys: { key: string; coor: number[]; }[], grid: string[][]): number {
        if (keys.length === 0) {
            return 0;
        }

        const distancesOfKeys: number[] = []; 
        for(const key of keys) {
            distancesOfKeys.push(getDistanceToTargetBfs(startingCoor, key, grid));
        }
        
        let min = Number.MAX_SAFE_INTEGER;
        
        for (let i = 0; i < keys.length; i++) {
            if (distancesOfKeys[i] === Number.MAX_SAFE_INTEGER) {
                continue;
            }

            const newGrid = copyGridAndMaskKey(grid, keys[i]);
            const newSetOfTargetKeys = copyKeys(keys, keys[i]);
            const newStartingCoor = keys[i].coor;
            min = Math.min(min, distancesOfKeys[i] + getShortestPathDfs(newStartingCoor, newSetOfTargetKeys, newGrid));
        }   
                     
        return min;

    }

    function getDistanceToTargetBfs(curr: number[], key: { key: string; coor: number[]; }, grid: string[][]): number {
        const queue: {curr: number[], distance: number}[] = [{curr, distance: 0}];
        let index = 0;
        const visited = new Set<string>()
        while(index < queue.length) {
            const top = queue[index];
            visited.add(toHashKey(top.curr));
            if (grid[top.curr[0]][top.curr[1]] === key.key) {
                return top.distance;
            }

            const neigbors = getValidNeighbors(curr, grid, visited);

            for (const neigbor of neigbors) {
                if (!(grid[neigbor[0]][neigbor[1]] === '#' || isUpperCase(grid[neigbor[0]][neigbor[1]]))) {
                    queue.push({curr: neigbor, distance: top.distance + 1})
                }
            }

            index++;
        }

        return Number.MAX_SAFE_INTEGER;
    }

    function copyGridAndMaskKey(grid: string[][], maskedKey: { key: string; coor: number[]; }) {
        let index = 0;
        const newGrid = new Array<Array<string>>(grid.length).fill([]).map(r => new Array<string>(grid[0].length));

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                if (grid[i][j] === maskedKey.key || grid[i][j] === maskedKey.key.toUpperCase()) {
                    newGrid[i][j] === '.'
                }
                else {
                    newGrid[i][j] === grid[i][j];
                }
            }
        }

        return newGrid;
    }



    function copyKeys(keys: { key: string; coor: number[]; }[], key: { key: string; coor: number[]; }) {
        const newKeys: { key: string; coor: number[]; }[]= [];
        for (const it of keys) {
            if (it.key !== key.key) {
                newKeys.push(it);
            }
        }

        return newKeys;
    }



    function toHashKey(curr: number[]): string {
        return curr.join();
    }

    function getValidNeighbors(curr: number[], grid: string[][], visited: Set<string>) {
        const neigbors: number[][] = [];
        let i = curr[0], j = curr[1];
        if (isInBound(i + 1, j, grid) && !visited.has(toHashKey([i + 1,j]))) {
            neigbors.push([i + 1, j]);
        }

        if (isInBound(i - 1, j, grid) && !visited.has(toHashKey([i - 1,j]))) {
            neigbors.push([i - 1, j]);
        }

        if (isInBound(i, j + 1, grid) && !visited.has(toHashKey([i,j + 1]))) {
            neigbors.push([i, j + 1]);
        }

        if (isInBound(i, j - 1, grid) && !visited.has(toHashKey([i,j - 1]))) {
            neigbors.push([i, j - 1]);
        }

        return neigbors;
    }


    function isInBound(i: number, j: number, grid: string[][]) {
        return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
    }


    function isUpperCase(char: string): boolean {
        return char.toLowerCase() !== char && char.toUpperCase() === char;
    }
    
    


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});







