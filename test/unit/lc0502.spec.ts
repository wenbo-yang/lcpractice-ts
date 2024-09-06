import { MaxHeap } from './commonLibs';

xdescribe('leetcode 502: ipo', () => {
    function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
        const doable = new MaxHeap<number>(); // sorted by profit high to low.
        const undoable = new Set<string>(); // {capital, profit}
        for (let i = 0; i < profits.length; i++) {
            if (profits[i] <= 0) continue;
            if (capital[i] <= w) doable.push(profits[i]);
            else undoable.add([capital[i], profits[i]].join());
        }

        const undoableArray = Array.from(undoable.values()).map((it) => it.split(',').map((n) => Number(n)));
        let undoableIndex = 0;
        while (doable.length !== 0 && k--) {
            w += doable.pop();

            const it = undoableArray[undoableIndex];
            while (undoableIndex < undoableArray.length && it[undoableIndex] <= w) {
                doable.push(undoableArray[undoableIndex++][0]);
            }
        }

        return w;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
