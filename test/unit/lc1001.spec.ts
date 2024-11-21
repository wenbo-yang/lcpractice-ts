xdescribe('leetcode 1001: grid illumination ', () => {
    function gridIllumination(n: number, lamps: number[][], queries: number[][]): number[] {
        const rowCount = new Map<number, number>();
        const colCount = new Map<number, number>();
        const diag1Count = new Map<number, number>(); // primary diagonal (top-left to bottom-right)
        const diag2Count = new Map<number, number>(); // secondary diagonal (top-right to bottom-left)

        const activeLamps = new Set<number>();
    
        for (const [row, col] of lamps) {
            const id = row * n + col; 
    
            if (activeLamps.has(id)) {
                continue;
            }
    
            activeLamps.add(id);
    
            rowCount.set(row, (rowCount.get(row) || 0) + 1);
            colCount.set(col, (colCount.get(col) || 0) + 1);
            diag1Count.set(row - col, (diag1Count.get(row - col) || 0) + 1);
            diag2Count.set(row + col, (diag2Count.get(row + col) || 0) + 1);
        }
    
        const results: number[] = [];
    
        for (const [row, col] of queries) {
            if (rowCount.get(row)! > 0 || colCount.get(col)! > 0 ||
                diag1Count.get(row - col)! > 0 || diag2Count.get(row + col)! > 0) {
                results.push(1);
            } else {
                results.push(0);
            }
    
            for (let x = row - 1; x <= row + 1; ++x) {
                for (let y = col - 1; y <= col + 1; ++y) {
                    if (x < 0 || x >= n || y < 0 || y >= n || !activeLamps.has(x * n + y)) {
                        continue;
                    }
    
                    activeLamps.delete(x * n + y);
    
                    rowCount.set(x, rowCount.get(x)! - 1);
                    colCount.set(y, colCount.get(y)! - 1);
                    diag1Count.set(x - y, diag1Count.get(x - y)! - 1);
                    diag2Count.set(x + y, diag2Count.get(x + y)! - 1);
                }
            }
        }

        return results;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
