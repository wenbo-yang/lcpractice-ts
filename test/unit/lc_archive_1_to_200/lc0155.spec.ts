xdescribe('leetcode 155: description', () => {
    class MinStack {
        private minStack: number[] = [];
        private fullStack: number[] = [];

        constructor() {}

        public push(val: number): void {
            if (val <= this.peekMin()) {
                this.minStack.push(val);
            }

            this.fullStack.push(val);
        }

        public pop(): void {
            let top = this.fullStack.pop();

            if (top === this.peekMin()) {
                this.minStack.pop();
            }
        }

        public top(): number {
            return this.fullStack[this.fullStack.length - 1];
        }

        public getMin(): number {
            return this.peekMin();
        }

        private peekMin() {
            return this.minStack[this.minStack.length - 1];
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
