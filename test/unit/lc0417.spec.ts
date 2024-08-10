xdescribe('leetcode 417: description', () => {
    function pacificAtlantic(heights: number[][]): number[][] {
        const pacificSet = initializePacificSet(heights);
        const atlanticSet = initializeAtlanticSet(heights);

        const result: number[][] = [];
        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {
                const visitedA = new Set<string>();
                const visitedP = new Set<string>();
                if (canReachAtlantic(heights, i, j, [], atlanticSet, visitedA) && canReachPacific(heights, i, j, [], pacificSet, visitedP)){
                    result.push([i,j]);
                }
            }
        }

        return result;
    };
    
    function canReachAtlantic(heights: number[][], r: number, c: number, currentPath: number[][], atlanticSet: Set<string>, visitedA: Set<string>): boolean {
        return canReach(heights, r, c, currentPath, atlanticSet, visitedA);
    }

    function canReachPacific(heights: number[][], r: number, c: number, currentPath: number[][], pacificSet: Set<string>, visitedP: Set<string>) {
        return canReach(heights, r, c, currentPath, pacificSet, visitedP);
    }

    function canReach(heights: number[][], r: number, c: number, currentPath: number[][], oceanSet: Set<string>, visited: Set<string>): boolean {
        if (r < 0 || r >= heights.length || c < 0 || c >= heights[0].length || visited.has(toKey(r,c))) {
            return false;
        }
        
        visited.add(toKey(r, c));
        
        if (oceanSet.has(toKey(r,c))) {
            pushPathIntoOceanSet(currentPath, oceanSet);
            return true;
        }

        currentPath.push([r,c]);
        
        const result = canReachAtlantic(heights, r + 1, c, currentPath, oceanSet, visited) ||
                       canReachAtlantic(heights, r - 1, c, currentPath, oceanSet, visited) ||
                       canReachAtlantic(heights, r, c + 1, currentPath, oceanSet, visited) ||
                       canReachAtlantic(heights, r, c - 1, currentPath, oceanSet, visited);

        currentPath.pop();

        return result;
    }

    function pushPathIntoOceanSet(currentPath: number[][], oceanSet: Set<string>) {
        for (const coord of currentPath) {
            oceanSet.add(toKey(coord[0], coord[1]));
        }
    }

    function initializeAtlanticSet(heights: number[][]): Set<string> {
        // last row and last col
        const atlanticSet = new Set<string>();

        for (let j = 0; j < heights[0].length; j++) {
            atlanticSet.add(toKey(heights.length - 1, j));
        }

        for (let i = 0; i < heights.length; i++) {
            atlanticSet.add(toKey(i, heights[0].length - 1));
        }

        return atlanticSet;
    }

    function initializePacificSet(heights: number[][]) {
        // first row and first col
        const pacificSet = new Set<string>();

        for (let j = 0; j < heights[0].length; j++) {
            pacificSet.add(toKey(0, j));
        }

        for (let i = 0; i < heights.length; i++) {
            pacificSet.add(toKey(i, 0));
        }

        return pacificSet;
    }
    

    function toKey(row: number, col: number): string {
        return [row, col].join();
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




