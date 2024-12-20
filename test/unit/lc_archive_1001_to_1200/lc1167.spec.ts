import { MinHeap } from "./commonLibs";

xdescribe('leetcode 1167: min cost of connecting sticks', () => {
    function connectSticks(sticks: number[]): number {
        const pq = new MinHeap<number>();
        let ans = 0;
        sticks.forEach(s => pq.push(s));

        while (pq.length) {
            const x = pq.pop();
            const y = pq.pop();
            ans += x + y;
            pq.push(x + y);
        }
        return ans;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
