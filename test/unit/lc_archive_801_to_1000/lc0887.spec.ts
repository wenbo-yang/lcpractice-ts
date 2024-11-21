xdescribe('leetcode 887: super egg drop', () => {
    function superEggDrop(k: number, n: number): number {
        const df: number[][] = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));

        
        return dfs(n, k, df);
    };


    function dfs(floors: number, eggs: number, df: number[][]): number {
        if (floors < 1) {
            return 0;
        }
        if (eggs === 1) {
            return floors;
        }
        if (df[floors][eggs]) {
            return df[floors][eggs];
        }

        let low = 1;
        let high = floors;
        while (low < high) {
            const mid = Math.floor((low + high + 1) / 2);
            const attemptsIfEggBreaks = dfs(mid - 1, eggs - 1, df); 
            const attemptsIfEggDoesNotBreak = dfs(floors - mid, eggs, df); 

            if (attemptsIfEggBreaks <= attemptsIfEggDoesNotBreak) {
                low = mid;
            } else {
                high = mid - 1;
            }
        }

        df[floors][eggs] = Math.max(dfs(low - 1, eggs - 1, df), dfs(floors - low, eggs, df)) + 1;
        return df[floors][eggs];
    }


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
