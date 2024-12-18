import { Queue } from "./commonLibs";

xdescribe('leetcode 1162: as far from land as possible', () => {
    function maxDistance(grid: number[][]): number {
        const queue = new Queue<{r: number, c: number, value: number}>();
        for (let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid.length; j++) {
                if (grid[i][j] === 0) {
                    queue.enque({r: i, c: j, value: 1});
                }
            }
        }

        while (queue.length) {
            const top = queue.deque()!;

            grid[top.r][top.c] = top.value;
            const neighbors = getNeighbors(grid, top.r, top.c);

            for (const neighbor of neighbors) {
                queue.enque({r: neighbor.r, c: neighbor.c, value: top.value + 1 });
            }
        }

        return Math.max(...grid.flat());
    };

    function getNeighbors(grid: number[][], r: number, c: number): {r:number, c: number}[] {
        const neighbors: {r: number, c: number }[] = [];

        if ((grid[r + 1] || [])[c] === 0) {
            neighbors.push({r: r+1, c});
        }

        if ((grid[r - 1] || [])[c] === 0) {
            neighbors.push({r: r-1, c});
        }

        if (grid[r][c + 1] === 0) {
            neighbors.push({r, c: c + 1});
        }

        if (grid[r][c - 1] === 0) {
            neighbors.push({r, c: c - 1});
        }

        return neighbors;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


