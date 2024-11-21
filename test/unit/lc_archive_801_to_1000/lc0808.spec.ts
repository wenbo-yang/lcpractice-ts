xdescribe('leetcode 808: description', () => {
    function soupServings(n: number): number {
        const mem = new Array(200).fill(0).map(() => new Array(200).fill(-1));
        
        if (n >= 4800) {
            return 1;
        }

        return dfs(Math.ceil(n / 25), Math.ceil(n / 25), mem, n);
    };

    function dfs(i: number, j: number, mem: number[][], n: number): number {
        if (i <= 0 && j <= 0) {
          return 0.5; 
        }
        if (i <= 0) {
          return 1; 
        }
        if (j <= 0) {
          return 0; 
        }
        
        if (mem[i][j] !== -1) {
          return mem[i][j];
        }
        
        mem[i][j] =
          0.25 * (dfs(i - 4, j, mem, n) + dfs(i - 3, j - 1, mem, n) + dfs(i - 2, j - 2, mem, n) + dfs(i - 1, j - 3, mem, n));
        return mem[i][j];
      };
    


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
