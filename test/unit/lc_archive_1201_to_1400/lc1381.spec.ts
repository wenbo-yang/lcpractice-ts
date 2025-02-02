xdescribe('leetcode 1381: design custom stack with increment operation', () => {
    class CustomStack {
        private stack: number[];
        private addTrack: number[];
        private currentIndex: number;

        constructor(maxSize: number) {
            this.stack = Array(maxSize).fill(0);
            this.addTrack = Array(maxSize).fill(0);
            this.currentIndex = 0;
        }
    
        push(x: number): void {
            if (this.currentIndex < this.stack.length) {
                this.stack[this.currentIndex++] = x;
            }
        }
    
        pop(): number {
            if (this.currentIndex <= 0) {
                return -1;
            }
            const topValue = this.stack[--this.currentIndex] + this.addTrack[this.currentIndex];
            if (this.currentIndex > 0) {
                this.addTrack[this.currentIndex - 1] += this.addTrack[this.currentIndex];
            }
            this.addTrack[this.currentIndex] = 0;
            return topValue;
        }   
    
        increment(k: number, val: number): void {
            let incrementIndex = Math.min(this.currentIndex, k) - 1;
            if (incrementIndex >= 0) {
                this.addTrack[incrementIndex] += val;
            }
        }
    }


    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
