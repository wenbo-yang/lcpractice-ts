xdescribe('leetcode 901: stock span', () => {
    class StockSpanner {
        stack: number[][] = [];
        constructor() {
        }
    
        next(price: number): number {
            let span = 1;
            while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
                span += (this.stack.pop() || [0, 0])[1];
            }

            this.stack.push([price, span]);
            return span;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
