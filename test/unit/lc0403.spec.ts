xdescribe('leetcode 403: frog game', () => {
    // [0,1,3,5, 6, 8, 12, 17]
    //  1 2 3 4  5  6  7  8
    //    1
    //      2
    //        2
    // or        1  2  x
    //              3
    //                  4   5

    // [0,1,2,3,4,8,9,11]
    //    1
    //      1   2
    //        2 1
    //

    function canCross(stones: number[]): boolean {
        const valueIndexMap = new Map<number, number>();

        for (let i = 0; i < stones.length; i++) {
            valueIndexMap.set(stones[i], i);
        }

        const mem = new Map<string, boolean>();

        return canCrossHelper(stones, 0, 0, mem, valueIndexMap);
    }

    function canCrossHelper(stones: number[], startingIndex: number, k: number, mem: Map<string, boolean>, valueIndexMap: Map<number, number>): boolean {
        if (startingIndex === stones.length - 1) {
            return true;
        }

        if (!mem.has([startingIndex, k].join())) {
            const low = canLand(stones, startingIndex, k - 1, valueIndexMap);
            const mid = canLand(stones, startingIndex, k, valueIndexMap);
            const high = canLand(stones, startingIndex, k + 1, valueIndexMap);

            if (!low && !mid && !high) {
                mem.set([startingIndex, k].join(), false);
            } else {
                let result = false;
                if (low) {
                    result = result || canCrossHelper(stones, low, k - 1, mem, valueIndexMap);
                }

                if (mid) {
                    result = result || canCrossHelper(stones, mid, k, mem, valueIndexMap);
                }

                if (high) {
                    result = result || canCrossHelper(stones, high, k + 1, mem, valueIndexMap);
                }

                mem.set([startingIndex, k].join(), result);
            }
        }

        return mem.get([startingIndex, k].join()) || false;
    }

    function canLand(stones: number[], startingIndex: number, k: number, valueIndexMap: Map<number, number>): number {
        const targetStone = stones[startingIndex] + k;
        const result = valueIndexMap.get(targetStone) || 0;
        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
