xdescribe('leetcode 741: cherry pick up', () => {
    function cherryPickup(grid: number[][]): number {
        const mem = new Array<Array<Array<number>>>(grid.length).fill([]).map(r => new Array<Array<number>>(grid.length).fill([]).map(c => new Array<number>(grid.length).fill(Number.MIN_SAFE_INTEGER)));
        
        
        const retVal = dfs(grid.length - 1, grid.length - 1, grid.length - 1, mem, grid);

        return Math.max(retVal, 0);
    };

    function dfs(x1: number, y1: number, x2: number, mem: number[][][], grid: number[][]): numner {
        const y2 = x1 + y1 - x2;

        if (x1 < 0 || y1 < 0 || x2 < 0 || y2 < 0) return -1;
        if (grid[y1][x1] < 0 || grid[y2][x2] < 0) return -1;
        if (x1 == 0 && y1 == 0) return grid[y1][x1];
        if (mem[x1][y1][x2] !== Number.MIN_SAFE_INTEGER) return mem[x1][y1][x2];        
        let ans =  Math.max(Math.max(dfs(x1 - 1, y1, x2 - 1, mem, grid), dfs(x1, y1 - 1, x2, mem, grid)),
                       Math.max(dfs(x1, y1 - 1, x2 - 1, mem, grid), dfs(x1 - 1, y1, x2, mem, grid)));
        if (ans < 0) return mem[x1][y1][x2] = -1;
        ans += grid[y1][x1];
        if (x1 !== x2) ans += grid[y2][x2];
        
        return mem[x1][y1][x2] = ans;
    }
    


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



