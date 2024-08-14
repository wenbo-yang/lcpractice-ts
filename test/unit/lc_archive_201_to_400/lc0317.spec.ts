import { Queue } from '../commonLibs';
xdescribe('leetcode 317: shortest distance to all buildings', () => {
    function shortestDistance(grid: number[][]): number {
        const buildingCount = new Array<Array<number>>(grid.length).fill([]).map((r) => new Array<number>(grid[0].length).fill(0));
        const distance = new Array<Array<number>>(grid.length).fill([]).map((r) => new Array<number>(grid[0].length).fill(0));
        let numberOfBuildings = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                if (grid[i][j] === 1) {
                    mapBuilding(grid, i, j, buildingCount, distance);
                    numberOfBuildings++;
                }
            }
        }

        let currentMin = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < buildingCount.length; i++) {
            for (let j = 0; j < buildingCount[0].length; j++) {
                if (buildingCount[i][j] === numberOfBuildings) {
                    currentMin = Math.min(currentMin, distance[i][j]);
                }
            }
        }

        return currentMin;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

function mapBuilding(grid: number[][], r: number, c: number, buildingCount: number[][], distance: number[][]) {
    const visited = new Array<Array<boolean>>(grid.length).fill([]).map((r) => new Array<boolean>(grid[0].length).fill(false));
    const queue = new Queue<{ r: number; c: number; distance: number }>();
    queue.enque({ r, c, distance: 0 });

    while (queue.length > 0) {
        const top = queue.deque();
        if (!top) break;
        visited[top.r][top.c] = true;
        distance[top.r][top.c] = distance[top.r][top.c] + top.distance;
        buildingCount[top.r][top.c] = buildingCount[top.r][top.c] + 1;
        const neighbors = getValidNeighbors(grid, r, c, visited);
        for (const n of neighbors) {
            queue.enque({ r: n[0], c: n[1], distance: top.distance + 1 });
        }
    }
}

function getValidNeighbors(grid: number[][], row: number, col: number, visited: boolean[][]): number[][] {
    const vectors = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    const validNeighbors: number[][] = [];
    for (const v of vectors) {
        const r = row + v[0];
        const c = col + v[1];

        if (isInBound(r, c, grid) && !visited && grid[r][c] !== 1 && grid[r][c] !== 2) {
            validNeighbors.push([r, c]);
        }
    }

    return validNeighbors;
}

function isInBound(r: number, c: number, grid: number[][]): boolean {
    return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
}
