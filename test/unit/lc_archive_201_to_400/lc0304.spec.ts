xdescribe('leetcode 304: description', () => {
    class NumMatrix {
        private matrix: number[][] = [];
        private cache = new Map<string, number>();
        constructor(matrix: number[][]) {
            this.matrix = matrix;
            this.constructRegionSumCache();
        }

        sumRegion(row1: number, col1: number, row2: number, col2: number): number {
            return this.cache.get([row1, col1, row2, col2].join()) || NaN;
        }

        private constructRegionSumCache() {
            for (let i = 0; i < this.matrix.length; i++) {
                for (let j = 0; j < this.matrix[0].length; j++) {
                    this.cache.set([i, j, i, j].join(), this.matrix[i][j]);
                    this.constructRowCache(i, j);
                    this.constructColCache(i, j);
                    this.constructDiagCache(i, j);
                }
            }
        }

        private constructRowCache(row: number, col: number): void {
            for (let i = 0; i < row; i++) {
                let top = i;
                let bottom = row;
                let left = col;
                let right = col;

                const prev = this.cache.get([top, left, bottom, right - 1].join());
                if (prev) {
                    this.cache.set([top, left, bottom, right].join(), prev + this.matrix[row][col]);
                }
            }
        }

        private constructColCache(row: number, col: number): void {
            for (let j = 0; j < col; j++) {
                let top = row;
                let bottom = row;
                let left = j;
                let right = col;

                const prev = this.cache.get([top, left, bottom, right - 1].join()) || 0;
                this.cache.set([top, left, bottom, right].join(), prev + this.matrix[row][col]);
            }
        }

        private constructDiagCache(row: number, col: number): void {
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    let top = i;
                    let bottom = row - 1;
                    let left = j;
                    let right = col - 1;

                    const diagVal = this.cache.get([top, left, bottom, right].join()) || 0;
                    const rowVal = this.cache.get([top, right, bottom, right].join()) || 0;
                    const colVal = this.cache.get([bottom, left, bottom, right].join()) || 0;

                    this.cache.set([top, left, row, col].join(), diagVal + rowVal + colVal + this.matrix[row][col]);
                }
            }
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
