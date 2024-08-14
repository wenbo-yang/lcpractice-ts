import { MaxHeap, MinHeap } from '../commonLibs';
xdescribe('leetcode 295: running median', () => {
    class MedianFinder {
        private maxHeap = new MaxHeap<number>();
        private minHeap = new MinHeap<number>();

        constructor() {}

        addNum(num: number): void {
            // first of all its all empty
            if (this.minHeap.length === 0 && this.maxHeap.length === 0) {
                this.minHeap.push(num);
                return;
            }

            if (num > (this.minHeap.peek() || Number.MIN_SAFE_INTEGER)) {
                this.minHeap.push(num);
            } else {
                this.maxHeap.push(num);
            }

            const bigger = this.maxHeap.length > this.minHeap.length ? this.maxHeap : this.minHeap;
            const smaller = bigger === this.maxHeap ? this.minHeap : this.maxHeap;

            if (bigger.length - smaller.length === 2) {
                const adjustment = bigger.pop();
                smaller.push(adjustment);
            }
        }

        findMedian(): number {
            const bigger = this.maxHeap.length > this.minHeap.length ? this.maxHeap : this.minHeap;
            const smaller = bigger === this.maxHeap ? this.minHeap : this.maxHeap;

            if (bigger.length > smaller.length) {
                return bigger.peek();
            }

            return (bigger.peek() + smaller.peek()) / 2;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {
        const medianFinder = new MedianFinder();

        medianFinder.addNum(1);
        medianFinder.addNum(2);

        expect(medianFinder.findMedian()).toEqual(1.5);

        medianFinder.addNum(3);

        expect(medianFinder.findMedian()).toEqual(2);

        medianFinder.addNum(1);
        medianFinder.addNum(1);
        medianFinder.addNum(1);
        expect(medianFinder.findMedian()).toEqual(1);
    });
});
