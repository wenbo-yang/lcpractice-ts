xdescribe('leetcode 892: surface area of 3D shapes', () => {
    function surfaceArea(grid: number[][]): number {
        let area = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                area += 2;
                const fourNeighbors = [grid[i - 1][j], grid[i + 1][j],grid[i][j + 1], grid[i][j - 1]];
                
                for (const n of fourNeighbors) {
                    if (n === undefined) {
                        area += grid[i][j];
                    }
                    else if (n <= grid[i][j]) { // if the neighbor is smaller than add the diff
                        area += grid[i][j] - n;
                    }
                }
            }
        }

        return area;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
