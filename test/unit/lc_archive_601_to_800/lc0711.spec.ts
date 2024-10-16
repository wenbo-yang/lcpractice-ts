xdescribe('leetcode 711: number of distinct islands', () => {
    function numberOfDistinctIsland(grid: number[][]): number {
        markDisconnectedIslands(grid);
        const r90 = rotate90(grid); 
        const r180 = rotate90(r90);
        const r270 = rotate90(r180);

        const map = new Map<number, Set<string>>();

        for (const g of [grid, r90, r180, r270]) {
            const visited = new Array<Array<boolean>>(grid.length).fill([]).map(r => new Array<boolean>(grid[0].length).fill(false));
            
            for (let i = 0; i < g.length; i++) {
                for (let j = 0; j < g[0].length; j++) {
                    if (g[i][j] !== 0 && !visited[i][j]) {
                        const path = mapIsland(g, i, j, visited, 'O');
                        const set = map.get(g[i][j]) || new Set<string>();
                        set.add(path);
                        map.set(grid[i][j], set);
                    }
                }
            }
        }


        const keys = Array.from(map.keys());


        for (let i = 0; i < keys.length; i++ ) {
            const id = keys[i];
            const paths = map.get(id);
            if (paths) {
                for (let j = i+1; j < keys.length; j++) {
                    const otherPaths = map.get(keys[j]);
    
                    if (otherPaths) {
                        for (const path of paths) {
                            if (otherPaths.has(path)) {
                                map.delete(keys[j]);
                                break;
                            }
                        }
                    }
                }
            }
        }

        return map.size;
    }

    function mapIsland(g: number[][], i: number, j: number, visited: boolean[][], direction: string): string {
        if (i < 0 || i >= g.length || j < 0 || j >= g[0].length || g[i][j] === 0 || visited[i][j]) {
            return '';
        }

        visited[i][j] = true;
        
        return direction + mapIsland(g, i-1, j, visited, 'U')
                         + mapIsland(g, i+1, j, visited, 'D')
                         + mapIsland(g, i, j-1, visited, 'L')
                         + mapIsland(g, i, j+1, visited, 'R');
    }

    function rotate90(grid: number[][]): number[][] {
        const newGrid = new Array<Array<number>>(grid[0].length).fill([]).map(r => new Array<number>(grid.length).fill(0));

        for(let i = 0; i < newGrid.length; i++) {
            for(let j = 0; j < newGrid[0].length; j++) {
                newGrid[i][j] = grid[grid.length - 1 - j][i];
            }
        }

        return newGrid;
    }

    function markDisconnectedIslands(grid: number[][]) {
        const visited = new Array<Array<boolean>>(grid.length).fill([]).map(r => new Array<boolean>(grid[0].length).fill(false));
        let uniqueValue = 1;
        for(let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] !== 0 && !visited[i][j]) {
                    mapIslandAndSetUniqueValue(grid, i, j, uniqueValue++, visited);
                }
            }
        }
    }

    function mapIslandAndSetUniqueValue(grid: number[][], i: number, j: number, uniqueValue: number, visited: boolean[][]) {
        if (i < 0|| i>= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0 || visited[i][j] ) {
            return;
        }

        visited[i][j] = true;
        grid[i][j] = uniqueValue;

        mapIslandAndSetUniqueValue(grid, i+1, j, uniqueValue, visited);
        mapIslandAndSetUniqueValue(grid, i-1, j, uniqueValue, visited);
        mapIslandAndSetUniqueValue(grid, i, j+1, uniqueValue, visited);
        mapIslandAndSetUniqueValue(grid, i, j-1, uniqueValue, visited);
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});






