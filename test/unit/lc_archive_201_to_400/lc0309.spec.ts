xdescribe('leetcode num: description', () => {
    class BinaryIndexedTree {
        private n: number = 0;
        private c: number[] = [];

        constructor(n: number) {
            this.n = n;
            this.c = new Array<number>(n + 1).fill(0);
        }

        public update(x: number, delta: number): void {
            while (x <= this.n) {
                this.c[x] += delta;
                x += this.lowbit(x);
            }
        }

        public query(x: number): number {
            let s = 0;
            while (x > 0) {
                s += this.c[x];
                x -= this.lowbit(x);
            }
            return s;
        }

        public lowbit(x: number): number {
            return x & -x;
        }
    }

    class NumMatrix {
        private trees: BinaryIndexedTree[] = [];

        constructor(matrix: number[][]) {
            let m = matrix.length;
            let n = matrix[0].length;
            this.trees = new Array<BinaryIndexedTree>(m);
            for (let i = 0; i < m; ++i) {
                let tree = new BinaryIndexedTree(n);
                for (let j = 0; j < n; ++j) {
                    tree.update(j + 1, matrix[i][j]);
                }
                this.trees[i] = tree;
            }
        }

        public update(row: number, col: number, val: number): void {
            let tree = this.trees[row];
            let prev = tree.query(col + 1) - tree.query(col);
            tree.update(col + 1, val - prev);
        }

        public sumRegion(row1: number, col1: number, row2: number, col2: number): number {
            let s = 0;
            for (let i = row1; i <= row2; ++i) {
                const tree = this.trees[i];
                s += tree.query(col2 + 1) - tree.query(col1);
            }
            return s;
        }
    }

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
