xdescribe('leetcode 329: longest increasing path', () => {
    function longestIncreasingPath(matrix: number[][]): number {
        const mem = new Map<string, number>();
        longestIncreasingPathHelper(matrix, 0, 0, mem);

        return Math.max(...Array.from(mem.values()));
    }

    function longestIncreasingPathHelper(matrix: number[][], r: number, c: number, mem: Map<string, number>): number {
        if (!isInBound(matrix, r, c)) {
            return 0;
        }

        if (mem.has(toKey(r, c))) {
            return mem.get(toKey(r, c)) || 0;
        }

        const left = [r, c - 1];
        const right = [r, c + 1];
        const top = [r + 1, c];
        const bottom = [r - 1, c];

        const topPath = canMove(matrix, matrix[r][c], top) ? longestIncreasingPathHelper(matrix, top[0], top[1], mem) : 0;
        const bottomPath = canMove(matrix, matrix[r][c], bottom) ? longestIncreasingPathHelper(matrix, bottom[0], bottom[1], mem) : 0;
        const leftPath = canMove(matrix, matrix[r][c], left) ? longestIncreasingPathHelper(matrix, left[0], left[1], mem) : 0;
        const rightPath = canMove(matrix, matrix[r][c], right) ? longestIncreasingPathHelper(matrix, right[0], right[1], mem) : 0;

        const pathLength = Math.max(topPath, bottomPath, leftPath, rightPath) + 1;
        mem.set(toKey(r, c), pathLength);

        return pathLength;
    }

    function toKey(r: number, c: number): string {
        return [r, c].join();
    }

    function isInBound(matrix: number[][], r: number, c: number) {
        return r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length;
    }

    function canMove(matrix: number[][], currentValue: number, rc: number[]) {
        return isInBound(matrix, rc[0], rc[1]) && currentValue < matrix[rc[0]][rc[1]];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
