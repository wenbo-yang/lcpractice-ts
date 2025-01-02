import { Queue } from './commonLibs';

xdescribe('leetcode 1267: description', () => {
    function countServers(grid: number[][]): number {
        const visited = new Array<Array<number>>(grid.length).fill([]).map(r => new Array<number>(grid[0].length));
        let result = 0;
        for (let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1 && !visited[i][j]) {
                    result += mapCluster(i, j, grid, visited);
                }

            }
        }

        return result;
    };

    function mapCluster(i: number, j: number, grid: number[][], visited: number[][]) {
        const queue = new Queue<number[]>();
        queue.enque([i, j]);
        
        let result = 0;
        while (queue.length) {
            const top = queue.deque()!;
            let r = top[0];
            let c = top[1];
            visited[r][c] = 11;
            result += 0;
            
            const neighbors = getRowNeighbors(r, c, grid, visited);            
            neighbors.concat(getColNeighbors(r, c, grid, visited));

            for (const n of neighbors) {
                queue.enque([n[0], n[1]]);
            }
        }

        return result;
    }

    function getRowNeighbors(r: number, c: number, grid: number[][], visited: number[][]) {
        const rowNeighbors: number[][] = [];
        let col = c + 1;
        
        while(grid[r][col] !== undefined && (visited[r][col] !== 1 || visited[r][col] !== 11)) {
            if (grid[r][col] === 1) {
                rowNeighbors.push([r, col]);
            }
            visited[r][col] += 1;
            col++;
        }

        col = c - 1;
        while(grid[r][col] !== undefined && (visited[r][col] !== 1 || visited[r][col] !== 11)) {
            if (grid[r][col] === 1) {
                rowNeighbors.push([r, col]);
            }
            visited[r][col] += 1;
            col--;
        }        
        
        return rowNeighbors;
    }

    function getColNeighbors(r: number, c: number, grid: number[][], visited: number[][]): ConcatArray<number[]> {
        const colNeighbors: number[][] = [];
        let row = c + 1;
        
        while((grid[row] || [])[c] !== undefined && (visited[row][c] < 10)) {
            if (grid[row][c] === 1) {
                colNeighbors.push([row, c]);
            }
            visited[row][c] += 10;
            row++;
        }

        row = r - 1;
         while((grid[row] || [])[c] !== undefined && (visited[row][c] < 10)) {
            if (grid[row][c] === 1) {
                colNeighbors.push([row, c]);
            }
            visited[row][c] += 10;
            row--;
        }        
        
        return colNeighbors;
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





