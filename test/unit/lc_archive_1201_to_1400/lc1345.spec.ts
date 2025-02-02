xdescribe('leetcode 1345: minJumps ', () => {
    type IndexStepsPair = { index: number; steps: number };
    function minJumps(arr: number[]): number {
        const indexMap: Record<number, number[]> = {};
        const n: number = arr.length;

        for (let i = 0; i < n; i++) {
            if (!(arr[i] in indexMap)) {
            indexMap[arr[i]] = [];
            }
            indexMap[arr[i]].push(i);
        }

        const bfsQueue: IndexStepsPair[] = [{ index: 0, steps: 0 }];
        const visited: Set<number> = new Set();
        visited.add(0);

        while (bfsQueue.length > 0) {
            const current = bfsQueue.shift()!;
            const currentIndex = current.index;
            let steps = current.steps;
            if (currentIndex === n - 1) {
                return steps;
            }
            steps++;

            if (indexMap[arr[currentIndex]]) {
            for (const nextIndex of indexMap[arr[currentIndex]]) {
                if (!visited.has(nextIndex)) {
                    visited.add(nextIndex);
                    bfsQueue.push({ index: nextIndex, steps: steps });
                }
            }
            delete indexMap[arr[currentIndex]];
            }

            if (currentIndex + 1 < n && !visited.has(currentIndex + 1)) {
                visited.add(currentIndex + 1);
                bfsQueue.push({ index: currentIndex + 1, steps: steps });
            }
            if (currentIndex - 1 >= 0 && !visited.has(currentIndex - 1)) {
                visited.add(currentIndex - 1);
                bfsQueue.push({ index: currentIndex - 1, steps: steps });
            }
        }
        return -1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
