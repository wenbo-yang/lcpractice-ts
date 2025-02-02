xdescribe('leetcode 1293: shortest path in a grid with obstackes elimination', () => {
    function shortestPath(grid: number[][], k: number): number {
        const m = grid.length;
        const n = grid[0].length;
        let deltaX = [-1, 0, 1, 0];
        let deltaY = [0, 1, 0, -1];
        
        let dis = new Array<Array<Array<number>>>(m).fill([]).map((_) => new Array<Array<number>>(n).fill([]).map((_) => new Array(k).fill(0)));
        let vis = new Array<Array<Array<number>>>(m).fill([]).map((_) => new Array<Array<number>>(n).fill([]).map((_) => new Array(k).fill(false)));
        
        let q = [[0, 0, 0]];
        vis[0][0][0] = true;
        while (q.length > 0) {
            let [curX, curY, curK] = q.shift()!;
            if (curX == m - 1 && curY == n - 1) {
                return dis[curX][curY][curK];
            }
            for (let i = 0; i < 4; i++) {
                let newX = curX + deltaX[i]; 
                let newY = curY + deltaY[i]; 
                if (newX < 0 || newX >= m || newY < 0 || newY >= n) {
                    continue;
                }
                let newK = curK; 
                if (grid[newX][newY] === 1) {
                    newK++;
                }
                if (newK > k) {        
                    continue;
                }
                if (vis[newX][newY][newK]) {
                    continue;
                }
                dis[newX][newY][newK] = dis[curX][curY][curK] + 1;
                vis[newX][newY][newK] = true;
                q.push([newX, newY, newK]);
            }
        }
        return -1; 
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
