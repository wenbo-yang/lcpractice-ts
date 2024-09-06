xdescribe('leetcode 554: brick wall', () => {
    function leastBricks(wall: number[][]): number {
        const width = wall[0].reduce((a, b) => a + b);
        const buckets = new Array<number>(width + 1).fill(0);
        buckets[0] = Number.MAX_SAFE_INTEGER;
        // 0, 1, 2, 3, 4, 5
        // [0 to 0,99 ], [1 to 1.99], [2, to 2.99] [3,4],[4,5], [5,6]

        for (const row of wall) {
            let offset = 0;

            for (const b of row) {
                let l = offset;
                let r = offset + b;

                for (let i = l + 1; i <= r; i++) {
                    buckets[i]++;
                }

                offset += b;
            }
        }

        return Math.min(...buckets);
    }

    function leastBricksHashTable(wall: number[][]): number {
        const boundaryMap = new Map<number, number>();
        let maxCount = 0;
        for (const row of wall) {
            let offset = 0;
            for (let i = 0; i < row.length - 1; i++) {
                offset += row[i];
                maxCount = Math.max(maxCount, boundaryMap.get(offset) || 0);
                boundaryMap.set(offset, (boundaryMap.get(offset) || 0) + 1);
            }
        }

        return wall.length - maxCount;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
