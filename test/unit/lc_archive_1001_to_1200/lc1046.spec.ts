import { MaxHeap } from "./commonLibs";

xdescribe('leetcode 1046: last stone weight', () => {
    function lastStoneWeight(stones: number[]): number {
        const priorityQueue = new MaxHeap<number>();
    
        for (const stone of stones) {
            priorityQueue.push(stone);
        }

        while (priorityQueue.length > 1) {
            const heavierStone = priorityQueue.pop();
            const lighterStone = priorityQueue.pop();

            if (heavierStone !== lighterStone) {
                priorityQueue.push(heavierStone - lighterStone);
            }
        }

        return priorityQueue.length === 0 ? 0 : priorityQueue.pop();
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
