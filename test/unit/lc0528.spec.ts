xdescribe('leetcode 528: random index pick based on weight', () => {
    class Solution {
        range: number[];
        constructor(w: number[]) {
            // [2, 3];
            // [0-0.4, 0.4 - 0.6]
            const sum = w.reduce((a, b) => a + b);
            w = w.map((n) => n / sum);
            this.range = new Array<number>(w.length + 1).fill(0);
            this.range[1] = w[0];
            for (let i = 1; i < w.length; i++) {
                this.range[i + 1] = w[i] + this.range[i];
            }
        }

        pickIndex(): number {
            const rand = Math.random();
            let l = 1;
            let r = this.range.length - 1;

            do {
                let pivot = Math.floor((r + l) / 2);
                if (rand < this.range[pivot] && rand > this.range[pivot - 1]) {
                    return pivot;
                }

                if (rand < this.range[pivot]) {
                    r = pivot;
                }

                if (rand > this.range[pivot]) {
                    l = pivot + 1;
                }
            } while (l < this.range.length);

            return -1;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
