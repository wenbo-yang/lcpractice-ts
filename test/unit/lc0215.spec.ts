import { MinHeap } from './commonLibs';

xdescribe('leetcode 215: kth largest in an array', () => {
    function findKthLargest(nums: number[], k: number): number {
        const minHeap: MinHeap<number> = new MinHeap();

        for (let i = 0; i < nums.length; i++) {
            if (minHeap.length === k && minHeap.peek() < nums[i]) {
                minHeap.pop();
                minHeap.push(nums[i]);
            } else if (minHeap.length < k) {
                minHeap.push(nums[i]);
            }
        }

        return minHeap.peek();
    }

    it('test case 1 Input:, [3,2,1,5,6,4], k = 2, output 5 ', () => {
        expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
    });
});
