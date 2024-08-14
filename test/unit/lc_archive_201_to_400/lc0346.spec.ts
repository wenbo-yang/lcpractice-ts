xdescribe('leetcode 346: moving average', () => {
    class MovingAverage {
        private average: number = 0;
        private array: number[] = [];
        private window = 0;
        constructor(window: number) {
            this.window = window;
        }

        public next(num: number) {
            this.array.push(num);
            if (this.array.length <= this.window) {
                this.average = (this.average * (this.array.length - 1) + num) / this.array.length;
            } else {
                const prev = this.array.shift() || 0;
                this.average = (this.average * this.array.length - prev + num) / this.array.length;
            }

            return this.average;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
