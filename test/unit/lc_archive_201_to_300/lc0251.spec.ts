xdescribe('leetcode 251: iteratable 2D vector', () => {
    class Vector2D {
        private vector: number[][] = [];
        private row = 0;
        private col = 0;
        constructor(vector2d: number[][]) {
            this.vector = vector2d;
        }

        public hasNext(): boolean {
            while (this.vector[this.row] && this.vector[this.row].length === 0) {
                this.row++;
            }

            return this.vector[this.row][this.col] !== undefined;
        }

        public next(): number {
            this.hasNext();

            const value = this.vector[this.row][this.col++];

            if (this.vector[this.row] && this.col === this.vector[this.row].length) {
                this.col = 0;
                this.row++;
            }

            return value;
        }

        public reset(): void {
            this.row = 0;
            this.col = 0;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
