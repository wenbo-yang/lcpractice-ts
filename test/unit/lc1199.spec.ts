import {MinHeap} from './commonLibs';

xdescribe('leetcode 1199: minimum time to build blocks', () => {
    function minBuildTime(blocks: number[], split: number): number {
        const pq = new MinHeap<number>();
        for (const x of blocks) {
            pq.push(x);
        }
        while (pq.length > 1) {
            pq.pop()!;
            pq.push(pq.pop()! + split);
        }
        return pq.pop()!;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
