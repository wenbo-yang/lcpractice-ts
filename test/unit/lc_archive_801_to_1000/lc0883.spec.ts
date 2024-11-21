xdescribe('leetcode 883: ', () => {
    function projectionArea(grid: number[][]): number {
        const zArea = grid.flat(1).length - grid.flat(1).filter( r => r === 0).length;

        const xArea = grid.map(r => Math.max(...r)).reduce((a,b) => a + b);

        const maxCol = new Array<number>(grid[0].length).fill(0);
        let index = 0;
        grid.forEach(r => r.forEach(c => {maxCol[index % maxCol.length] = Math.max(maxCol[index%maxCol.length], c); index++;}));
        const yArea = maxCol.reduce((a,b) => a+b);
        
        return zArea + xArea + yArea;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
