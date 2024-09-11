xdescribe('leetcode 519: random flip', () => {
    class Solution {
        private m: number = 0;
        private n: number = 0;
        private zeroArray: number[][] = [];
        private oneArray: number[][] = [];

        constructor(m: number, n: number) {
            this.m = m;
            this.n = n;

            this.initializeZeroArray();
        }

        private initializeZeroArray() {
            let index = 0;
            for (let i = 0; i < this.m; i++) {
                for (let j = 0; j < this.n; j++) {
                    this.zeroArray.push([i, j]);
                }
            }
        }

        flip(): number[] {
            const index = Math.floor(Math.random() * this.zeroArray.length - 1);
            this.swap(index);

            return this.oneArray[this.oneArray.length - 1];
        }

        private swap(index: number) {
            const temp = Array.from(this.zeroArray[index]);
            this.zeroArray[index] = Array.from(this.zeroArray[this.zeroArray.length - 1]);
            this.oneArray.push(temp);
        }

        reset(): void {
            this.zeroArray.concat(this.oneArray);
        }
    }

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
