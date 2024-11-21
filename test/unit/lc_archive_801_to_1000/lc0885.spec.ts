xdescribe('leetcode 885: spiral matrix 3', () => {
    function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
        let supposedDistance = 1;
        const directions = [[0, 1], [-1, 0], [0, -1], [1, 0]];
        let index = 0;
        const result: number[][] = [];
        let r = rStart;
        let c = cStart;
        let currDistIterationCount = 0;
        while(result.length < rows * cols) {
            let currDist = 0;
            while (currDist < supposedDistance) {
                const target = [r, c];
                if (isInBound(r, c, rows, cols)) {
                    result.push([r,c]);
                }
                r += directions[index%4][0];
                c += directions[index%4][0];
                index++;
                currDist++;
            }

            currDistIterationCount++;
            
            if (currDistIterationCount === 2) {
                supposedDistance++;
                currDistIterationCount = 0;
            }

        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
function isInBound(r: number, c: number, rows: number, cols: number) {
    return r >= 0 && r < rows && c >= 0 && c < cols;
}

