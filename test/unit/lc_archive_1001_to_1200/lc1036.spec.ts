xdescribe('leetcode 1036: escape a large maze', () => {
    function isEscapePossible(blocked: number[][], source: number[], target: number[]): boolean {
        const blockedSet: Set<number> = new Set();
        blockedSet.clear();

        blocked.forEach(cell => {
            blockedSet.add(hashPosition(cell[0], cell[1]));
        });
    
        let visitedFromSource: Set<number> = new Set();
        let visitedFromTarget: Set<number> = new Set();
    
        return dfs(source, target, visitedFromSource, blockedSet) && dfs(target, source, visitedFromTarget, blockedSet);
    };
    
    function hashPosition(x: number, y: number): number {
        const GRID_SIZE: number = 1e6;
        return x * GRID_SIZE + y;
    }

    function dfs(source: number[], target: number[], visited: Set<number>, blockedSet: Set<number>): boolean {
        const GRID_SIZE: number = 1e6;
        const directions: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]]; 

        const [currentX, currentY] = source;
        const [targetX, targetY] = target;

        if (currentX < 0 || currentX >= GRID_SIZE || currentY < 0 || currentY >= GRID_SIZE ||
            blockedSet.has(hashPosition(currentX, currentY)) ||
            visited.has(hashPosition(currentX, currentY))) {
            return false;
        }

        visited.add(hashPosition(currentX, currentY));

        if (visited.size > 20000 || (currentX === targetX && currentY === targetY)) {
            return true;
        }

        for (let dir of directions) {
            const nextX = currentX + dir[0];
            const nextY = currentY + dir[1];
            if (dfs([nextX, nextY], target, visited, blockedSet)) {
                return true;
            }
        }

        return false;
    }


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
