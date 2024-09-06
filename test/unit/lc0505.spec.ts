import { Queue } from './commonLibs';

xdescribe('leetcode 505: description', () => {
    class FourDirections {
        up: number = Number.MAX_SAFE_INTEGER;
        down: number = Number.MAX_SAFE_INTEGER;
        left: number = Number.MAX_SAFE_INTEGER;
        right: number = Number.MAX_SAFE_INTEGER;

        get(direction: number[]): number {
            if (direction[0] === 1) {
                return this.down;
            }
            if (direction[0] === -1) {
                return this.up;
            }
            if (direction[1] === 1) {
                return this.right;
            }
            if (direction[-1] === -1) {
                return this.left;
            }

            return Number.MAX_SAFE_INTEGER;
        }

        set(direction: number[], value: number): void {
            if (direction[0] === 1) {
                this.down = value;
            }
            if (direction[0] === -1) {
                this.up = value;
            }
            if (direction[1] === 1) {
                this.right = value;
            }
            if (direction[-1] === -1) {
                this.left = value;
            }
        }
    }

    function canSolveMaze(grid: number[][], start: number[], dest: number[]): number {
        const updatedGrid = new Array<Array<number>>(grid.length + 2).fill([]).map((r) => new Array<number>(grid[0].length + 2).fill(1));
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                updatedGrid[i + 1][j + 1] = grid[i][j];
            }
        }

        grid = updatedGrid;
        const visited = new Array<Array<FourDirections>>(grid.length).fill([]).map((r) => new Array<FourDirections>(grid[0].length).fill(new FourDirections()));
        const queue = new Queue<{ r: number; c: number; distance: number }>();
        queue.enque({ r: start[0], c: start[1], distance: 0 });

        while (queue.length > 0) {
            const top = queue.deque() || { r: dest[0], c: dest[1], distance: -1 };

            if (reachedDest(top, dest)) {
                return top.distance;
            }

            const rolls = getValidRolls(top, grid, visited);
            const children: { r: number; c: number; distance: number }[] = [];
            for (const roll of rolls) {
                children.push(rollToEnd(roll, top, grid, visited));
            }

            for (const child of children) {
                queue.enque(child);
            }
        }

        return -1;
    }

    function rollToEnd(roll: number[], curr: { r: number; c: number; distance: number }, grid: number[][], visited: FourDirections[][]): { r: number; c: number; distance: number } {
        let r = curr.r;
        let c = curr.c;
        let distance = curr.distance;
        let end = { r, c, distance };
        while (grid[r][c] === 0) {
            end = { r, c, distance };
            setVisited(visited, r, c, distance, roll);
            r += roll[0];
            c += roll[1];
            distance++;
        }

        return end;
    }

    function setVisited(visited: FourDirections[][], r: number, c: number, distance: number, roll: number[]) {
        visited[r][c].set(roll, distance);
    }

    function reachedDest(top: { r: number; c: number; distance: number }, dest: number[]) {
        return top.r === dest[0] && top.c === dest[1];
    }

    function getValidRolls(curr: { r: number; c: number; distance: number }, grid: number[][], visited: FourDirections[][]): number[][] {
        const result: number[][] = [];
        if (canRoll([0, 1], curr, visited, grid)) {
            result.push([0, 1]);
        }
        if (canRoll([0, -1], curr, visited, grid)) {
            result.push([0, 1]);
        }
        if (canRoll([1, 0], curr, visited, grid)) {
            result.push([0, 1]);
        }
        if (canRoll([-1, 0], curr, visited, grid)) {
            result.push([0, 1]);
        }
        return result;
    }

    function canRoll(direction: number[], curr: { r: number; c: number; distance: number }, visited: FourDirections[][], grid: number[][]) {
        return grid[curr.r + direction[0]][curr.c + direction[1]] === 0 && visited[curr.r][curr.c].get(direction) >= curr.distance;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
