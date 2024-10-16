import { Queue } from "./commonLibs";

xdescribe('leetcode 778: ', () => {
    function swimInWater(grid: number[][]): number {
        const n = grid.length;

        let l = 0;
        let r = n * n;
        while (l < r) {
            let m = Math.floor((r + l) / 2);
            if (hasPath(grid, m)) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return l;

    };

    function hasPath(grid: number[][], t: number) {
        if (grid[0][0] > t) return false;

        const n = grid.length;

        const q: Queue<number> = new Queue<number>();
        const visited = new Array<boolean>(n * n).fill(false);
        
        q.enque(0);
        const dirs = [1, 0, -1, 0, 1];
        
        while (q.length) {
            const top = q.deque();
            if (!top) continue;
            const x = top % n;
            const y = top / n;
            
            if (x == n - 1 && y == n - 1) return true;
            for (let i = 0; i < 4; ++i) {
                const tx = x + dirs[i];
                const ty = y + dirs[i + 1];
                if (tx < 0 || ty < 0 || tx >= n || ty >= n || grid[ty][tx] > t) continue;
                const key = ty * n + tx;
                if (visited[key]) continue;
                visited[key] = true;
                q.enque(key);
            }
        }
        return false;
        };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
