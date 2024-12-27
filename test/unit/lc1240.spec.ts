xdescribe('leetcode 1240: tilling a rectangle with the fewest squares', () => {
    function tilingRectangle(n: number, m: number): number {
        let minimumTiles = n * m;
        const isFilled: number[] = new Array(n).fill(0);
    
        const search = (row: number, col: number, tilesUsed: number) => {
            if (col === m) {
                row++;
                col = 0;
            }
            if (row === n) {
                minimumTiles = tilesUsed;
                return;
            }
            if ((isFilled[row] >> col) & 1) {
                search(row, col + 1, tilesUsed);
                return;
            }
            if (tilesUsed + 1 < minimumTiles) {
                let maxRow = 0, maxCol = 0;
                for (let r = row; r < n; ++r) {
                    if ((isFilled[r] >> col) & 1) break;
                    maxRow++;
                }
                for (let c = col; c < m; ++c) {
                    if ((isFilled[row] >> c) & 1) break;
                    maxCol++;
                }
                const maxSize = Math.min(maxRow, maxCol);
    
                for (let x = row; x < row + maxSize; ++x) {
                    for (let y = col; y < col + maxSize; ++y) {
                        isFilled[x] |= 1 << y;
                    }
                }
            for (let size = maxSize; size > 0; --size) {
                    search(row, col + size, tilesUsed + 1);
                    for (let k = 0; k < size; ++k) {
                        isFilled[row + size - 1] ^= 1 << (col + k);
                        if (k < size - 1) {
                            isFilled[row + k] ^= 1 << (col + size - 1);
                        }
                    }
                }
            }
        };
    
        search(0, 0, 0); 
        return minimumTiles; 
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
