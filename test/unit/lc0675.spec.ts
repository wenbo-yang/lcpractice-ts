import {Queue} from './commonLibs';

xdescribe('leetcode 675: cutting trees', () => {
    function cutOffTree(forest: number[][]): number {
        // [1, 2, 3, 4, 5]
        // [1, 2, 3, 4, 5]

        let m = forest.length;
        let n = forest[0].length;
        
        // {height, x, y}
        const trees: number[][] = [];
        for (let i = 0; i < m; i++)
            for (let j = 0; j < n; j++)
                if (forest[i][j] > 1)
                    trees.push([forest[i][j], i, j]);
        
        // sort trees by height
        trees.sort((a, b) => a[0] - b[0]);
        
        let sx = 0;
        let sy = 0;
        
        let total_steps = 0;
        
        // Move from current position to next tree to cut
        for (let i = 0; i < trees.length; ++i) {
            let tx = trees[i][1];
            let ty = trees[i][2];
            
            let steps = BFS(forest, sx, sy, tx, ty);
            if (steps == Number.MAX_SAFE_INTEGER) return -1;
            
            // Cut the tree, not necessary
            forest[ty][tx] = 1;
            
            total_steps += steps;
            
            sx = tx;
            sy = ty;
        }
        
        return total_steps;
        
    };

    function BFS(forest: number[][],  sx: number, sy: number,  tx: number, ty: number) {
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const visited = new Array<Array<boolean>>(forest.length).fill([]).map(r => new Array<boolean>(forest[0].length).fill(false));
  
        // {x, y}
        const queue = new Queue<[number, number]>()
        queue.enque([sx, sy]);
        
        let steps = 0;
        while (queue.length) {
            let newNodes = queue.length;
            while (newNodes--) {
                const node = queue.deque() || [0, 0];
                const cx = node[0];
                const cy = node[1];
                
                // Found the shortest path
                if (cx == tx && cy == ty) 
                    return steps;
                
                for (let i = 0; i < 4; ++i) {
                    const x = cx + dirs[i][0];
                    const y = cy + dirs[i][1];
                    
                    // Out of bound or unwalkable
                    if (x < 0 || x == forest[0].length 
                    || y < 0 || y == forest.length
                    || !forest[y][x]
                    || visited[y][x]) continue;
                    
                    // Mark x, y as visited
                    visited[y][x] = true;                    
                    queue.enque([x, y]);                
                }
            }
            ++steps;
        }
        
        // Impossible to reach
        return Number.MAX_SAFE_INTEGER;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
