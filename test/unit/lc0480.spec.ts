import { MaxHeap, MinHeap } from './commonLibs';

xdescribe('leetcode 480: description', () => {
    function medianSlidingWindow(nums: number[], k: number): number[] {
        if (k === 1) {
            return nums;
        }

        let l = 0;
        let r = 0;
        const maxHeap = new MaxHeap<number>();
        const minHeap = new MinHeap<number>();

        const medians: number[] = [];
        while (r < nums.length) {
            if (r - l < k) {
                addToMaxMinHeap(maxHeap, minHeap, nums[r++]);
            } else {
                removeFromMaxMinHeap(maxHeap, minHeap, nums[l++]);
            }

            getMedian(medians, maxHeap, minHeap, k);
        }

        return medians;
    }

    function getMedian(medians: number[], maxHeap: MaxHeap<number>, minHeap: MinHeap<number>, k: number) {
        if (maxHeap.length + minHeap.length === k) {
            medians.push(k % 2 === 0 ? (maxHeap.peek() + minHeap.peek()) / 2 : [maxHeap, minHeap].sort((a, b) => a.length - b.length)[1].peek());
        }
    }

    function addToMaxMinHeap(maxHeap: MaxHeap<number>, minHeap: MinHeap<number>, num: number) {
        if (maxHeap.length === 0 && minHeap.length === 0) {
            maxHeap.push(num);
            return;
        }

        if (num <= maxHeap.peek()) {
            maxHeap.push(num);
        } else {
            minHeap.push(num);
        }

        adjustMaxMinHeap(maxHeap, minHeap);
    }

    function removeFromMaxMinHeap(maxHeap: MaxHeap<number>, minHeap: MinHeap<number>, num: number) {
        if (num <= maxHeap.peek()) {
            maxHeap.remove(num);
        } else {
            minHeap.remove(num);
        }

        adjustMaxMinHeap(maxHeap, minHeap);
    }

    function adjustMaxMinHeap(maxHeap: MaxHeap<number>, minHeap: MinHeap<number>) {
        while (maxHeap.length - minHeap.length >= 2) {
            minHeap.push(maxHeap.pop());
        }

        while (minHeap.length - maxHeap.length >= 2) {
            maxHeap.push(minHeap.pop());
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
