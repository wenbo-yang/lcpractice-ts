import { Queue } from "./commonLibs";

xdescribe('leetcode 286: walls and gates', () => {
    function fillRoomWithDistanceToNearestGates(grid: number[][]): void {
        const queue = new Queue<{r: number, c: number, distance: number}>();
        initializeQueue(grid, queue);

        const visited = new Array<Array<boolean>>(grid.length).fill([]).map(r => r = new Array<boolean>(grid[0].length).fill(false));
        while (queue.length > 0) {
            const curr = queue.deque() || {r: -1, c: -1, distance: -1};
            visited[curr.r][curr.c] = true;
            if (grid[curr.r][curr.c] === -1) {
                continue;
            }

            grid[curr.r][curr.c] = curr.distance;

            const validNeighbors = getValidNeighbors(grid, curr.r, curr.c, visited);

            for (const neighbor of validNeighbors) {
                queue.enque({r: neighbor.r, c: neighbor.c, distance: curr.distance + 1})
            }
        }
    }

    function initializeQueue(grid: number[][], queue: Queue<{ r: number; c: number; distance: number}>) {
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid.length; c++) {
                if (grid[r][c] === 0) {
                    queue.enque({r,c, distance: 0})
                }
            }
        }
    }


    function getValidNeighbors(grid: number[][], r: number, c: number, visited: boolean[][]): {r: number, c: number}[] {
        const validNeighbors: {r: number, c: number}[] = [];
        
        if (isValidNeighbor(r - 1, c, visited, grid)) {
            validNeighbors.push({r: r - 1, c});
        }

        if (isValidNeighbor(r + 1, c, visited, grid)) {
            validNeighbors.push({r: r + 1, c});
        }

        if (isValidNeighbor(r, c - 1, visited, grid)) {
            validNeighbors.push({r, c: c - 1});
        }

        if (isValidNeighbor(r, c + 1, visited, grid)) {
            validNeighbors.push({r, c: c + 1});
        }

        return validNeighbors;
    }


    function isValidNeighbor(r: number, c: number, visited: boolean[][], grid: number[][]) {
        return r >= 0 && r < grid.length && c >=0 && grid[0].length && !visited[r][c];
    }

    it('test case 1 Input: grid, output grid ', () => {
        const grid = [
            [Number.MAX_SAFE_INTEGER,  -1,  0,  Number.MAX_SAFE_INTEGER],
            [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER,  -1],
            [Number.MAX_SAFE_INTEGER,  -1, Number.MAX_SAFE_INTEGER,  -1],
            [0,  -1, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
        ]

        fillRoomWithDistanceToNearestGates(grid);
        const expected =  [
            [3,  -1,   0,   1],
            [2,   2,   1,  -1],
            [1,  -1,   2,  -1],
            [0,  -1,   3,   4],
        ]
        expect(grid).toEqual(expected);
    });
});




