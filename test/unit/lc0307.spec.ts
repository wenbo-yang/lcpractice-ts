xdescribe('leetcode 307: description', () => {
    class FenwickTree {    
        private sums: number[] = [];

        constructor(n: number) {
            this.sums = new Array<number>(n + 1).fill(0);
        }
        
        public update(i: number, delta: number): void {
            while (i < this.sums.length) {
                this.sums[i] += delta;
                i += this.lowbit(i);
            }
        }
        
        public query(i: number): number {        
            let sum = 0;
            while (i > 0) {
                sum += this.sums[i];
                i -= this.lowbit(i);
            }
            return sum;
        }

        private lowbit(x: number): number { 
            return x & (-x); 
        }
    }

    class NumArray {
        private nums: number[] = [];
        private df: number[] = []

        constructor(nums: number[]) {
            this.nums = nums;
            this.constructRangeSumDF();
        }

        private constructRangeSumDF() {
            this.df = new Array<number>(this.nums.length).fill(0);
            this.df[0] = this.nums[0];

            for (let i = 1; i < this.df.length; i++) {
                this.df[i] = this.df[i - 1] + this.nums[i]
            }
        }
    
        update(index: number, val: number): void {
            
        }
    
        sumRange(left: number, right: number): number {
            return this.df[right] - this.df[left] + this.nums[left];
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
