import { Queue } from './commonLibs';

xdescribe('leetcode 1091: shortest path in binary matrix', () => {
    function shortestPathBinaryMatrix(grid: number[][]): number {
        if (grid[0][0] !== 0) {
            return -1;
        }

        const queue = new Queue<number[]>()
        queue.enque([0,0,0]);

        const visited = new Array<Array<boolean>>(grid.length).fill([]).map(r => new Array<boolean>(grid[0].length).fill(false));

        while (queue.length) {
            const top = queue.deque();

            if (!top) {
                break;
            }

            if (isEnd(top, grid)) {
                return top[2];
            }

            visited[top[0]][top[1]] = true;

            const neighbors = getValidNeighbors(top, grid, visited);

            for (const neighbor of neighbors) {
                queue.enque([neighbor[0], neighbor[1], top[2] + 1]);
            }
        }

        return -1;
    };
    
    function isEnd(top: number[], grid: number[][]) {
        return top[0] === grid.length - 1 && top[1] === grid[0].length - 1;
    }

    function getValidNeighbors(top: number[], grid: number[][], visited: boolean[][]) {
        const neigbors: number[][] = [];
        const r = top[0];
        const c = top[1];

        if (isValidNeighbor(r + 1, c, grid, visited)) {
            neigbors.push([r + 1, c]);
        }
        if (isValidNeighbor(r - 1, c, grid, visited)) {
            neigbors.push([r - 1, c]);
        }
        if (isValidNeighbor(r, c + 1, grid, visited)) {
            neigbors.push([r, c + 1]);
        }
        if (isValidNeighbor(r, c - 1, grid, visited)) {
            neigbors.push([r, c - 1]);
        }
        if (isValidNeighbor(r + 1, c + 1, grid, visited)) {
            neigbors.push([r + 1, c + 1]);
        }
        if (isValidNeighbor(r - 1, c - 1, grid, visited)) {
            neigbors.push([r - 1, c - 1]);
        }
        if (isValidNeighbor(r + 1, c - 1, grid, visited)) {
            neigbors.push([r + 1, c - 1]);
        }
        if (isValidNeighbor(r - 1, c + 1, grid, visited)) {
            neigbors.push([r - 1, c + 1]);
        }

        return neigbors;
    }

    function isValidNeighbor(r: number, c: number, grid: number[][], visited: boolean[][]) {
        return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && !visited[r][c];
    }
    
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});






