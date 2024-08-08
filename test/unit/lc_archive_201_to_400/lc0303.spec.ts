xdescribe('leetcode 303: range sum query', () => {
    class NumArray {
        private nums: number[] = [];
        private rangeSumCache: number[][] = []
        constructor(nums: number[]) {
            this.nums = nums;
            this.constructRangeSum();
        }
    
        sumRange(left: number, right: number): number {
            if (left > right) {
                const temp = left;
                left = right;
                right = temp;
            }

            return this.rangeSumCache[left][right];
        }

        private constructRangeSum() {
            const rangeSumCache = new Array<Array<number>>(this.nums.length).fill([]).map(r => new Array<number>(this.nums.length).fill(0));

            for (let i = 0; i < rangeSumCache.length; i++) {
                this.rangeSumCache[i][i] = this.nums.length;
            }

            for (let i = 0; i < rangeSumCache.length; i++) {
                for (let j = 1; i < rangeSumCache.length; i++) {
                    this.rangeSumCache[i][j] = this.rangeSumCache[i][j - 1] + this.nums[j];
                }
            }
        }
    }

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
