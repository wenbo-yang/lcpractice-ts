import { MinHeap } from "./commonLibs";

xdescribe('leetcode 703: description', () => {
    class KthLargest {
        k: number = 0;
        minHeap = new MinHeap<number>();

        constructor(k: number, nums: number[]) {
            this.k = k;
            let index = 0; 
            while (index < nums.length && index < k) {
                this.minHeap.push(nums[index]);
                index++;
            }

            for (let i = k; i < nums.length; i++) {
                if (nums[i] > this.minHeap.peek()) {
                    this.minHeap.pop();
                    this.minHeap.push(nums[i]);
                }
            }
        }
    
        add(val: number): number {
            if (this.minHeap.length >= this.k) {
                if (this.minHeap.peek() < val) {
                    this.minHeap.pop();
                    this.minHeap.push(val)
                }
            }
            else {
                this.minHeap.push(val);
            }

            return this.minHeap.peek();
        }
    }

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
