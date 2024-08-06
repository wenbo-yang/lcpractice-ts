import {MinHeap} from './commonLibs';

xdescribe('leetcode 347: ', () => {
    function topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();

        for(const num of nums) {
            let count = countMap.get(num) || 0;
            countMap.set(num, ++count);
        }

        const compare = function (a: number[], b: number[]) {
            if (a[1] - b[1] > 0) return 1; if (a[1] - b[1] < 0) return -1; return 0;
        }
        
        const minHeap = new MinHeap<number[]>(compare);

        for(const entry of countMap.entries()) {
            minHeap.push(entry);

            if (minHeap.length > k) {
                minHeap.pop();
            }
        }

        return minHeap.toArray().map(r => r[0]);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});