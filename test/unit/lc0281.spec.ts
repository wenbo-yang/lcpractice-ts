xdescribe('leetcode 281: zigzag iterator', () => {
    class ZigZagIterator {
        private nums: Map<number, number[]> = new Map();
        private rowIter: IterableIterator<number>;
        private currCol = 0;
        
        constructor(nums: number[][]) {
            let index = 0;
            for (const row of nums) {
                this.nums.set(index++, row.reverse());
            }

            this.rowIter = nums.keys();
        }

        public hasNext(): boolean {
            return this.nums.size > 0;
        }

        public next(): number | undefined {
            let key = this.rowIter.next().value;

            const value = (this.nums.get(key) || []).pop();

            const row = this.nums.get(key) || [];
            if (row.length === 0) {
                this.nums.delete(key);
            }

            if (this.rowIter) {
                this.rowIter = this.nums.keys();
            }

            return value;
        }

    }


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
