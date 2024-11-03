xdescribe('leetcode 931: min failing path', () => {
    function minFallingPathSum(matrix: number[][]): number {
        const mem = new Map<string, number>(); 
        
        let min = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < matrix.length; j++) {
            min = Math.min(min, dfs(0, j, matrix, mem))
        }

        return min;
    };

    function dfs(r: number, c: number, matrix: number[][], mem: Map<string, number>): number {
        if (r < 0 || r >= matrix.length || c < 0 || c >= matrix.length) {
            return Number.MAX_SAFE_INTEGER;
        }

        if (mem.has(toKey(r,c))) {
            return mem.get(toKey(r,c)) || 0;
        }

        let min = Number.MAX_SAFE_INTEGER;

        const children = [c-1, c, c+1];

        for (const child of children) {
            min = Math.min( matrix[r][c] + dfs(r+1, child, matrix, mem));
        }

        mem.set(toKey(r,c), min);

        return min;
    }

    function toKey(r: number, c: number): string {
        return [r,c].join();
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


