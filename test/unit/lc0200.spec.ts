xdescribe('leetcode 200: number of islands', () => {
    function numIslands(grid: string[][]): number {
        const visited = new Array<Array<boolean>>(grid.length).fill([]).map((r) => new Array<boolean>().fill(false));

        let count = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === '1' && !visited[i][j]) {
                    count++;
                    mapIsland(grid, visited, i, j);
                }
            }
        }

        return count;
    }

    function mapIsland(grid: string[][], visited: boolean[][], row: number, col: number) {
        if (row >= grid.length || row < 0 || col >= grid[0].length || col < 0 || grid[row][col] === '0' || visited[row][col]) {
            return;
        }

        visited[row][col] = true;

        mapIsland(grid, visited, row + 1, col);
        mapIsland(grid, visited, row - 1, col);
        mapIsland(grid, visited, row, col + 1);
        mapIsland(grid, visited, row, col - 1);
    }

    it('test case 1 Input is some grid with 1 island, output 1 ', () => {
        const grid = [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
        ];

        expect(numIslands(grid)).toEqual(1);
    });

    it('test case 1 Input is some grid with 3 islands, output 3 ', () => {
        const grid = [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ];

        expect(numIslands(grid)).toEqual(3);
    });
});
