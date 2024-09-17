xdescribe('leetcode 624: max distance in arrays', () => {
    function maxDistance(arrays: number[][]): number {
        const minArrays = getTwoMins(arrays);
        const maxArrays = getTwoMaxs(arrays);

        const max = Math.max(
            minArrays[0][1] === maxArrays[0][1] ? Math.abs(minArrays[0][0] - maxArrays[1][0]) : Math.abs(minArrays[0][0] - maxArrays[0][0]),
            minArrays[1][1] === maxArrays[0][1] ? Math.abs(minArrays[1][0] - maxArrays[1][0]) : Math.abs(minArrays[1][0] - maxArrays[0][0])
        )

        return max;
    };

    function getTwoMins(arrays: number[][]): number[][] {
        const result: number[][] = new Array<number[]>(2).fill([Number.MAX_SAFE_INTEGER, -1]);
        let index = 0;
        
        for (const a of arrays) {
            if (a[0] <= result[0][0] && a[0] < result[1][0]) {
                result[1][0] = result[0][0];
                result[1][1] = result[0][1];

                result[0][0] = a[0];
                result[0][1] = index;
            }
            else if (a[0] > result[0][0] && a[0] <= result[1][0]) {      
                result[1][0] = a[0];
                result[1][1] = index;
            }

            index++
        }

        return result;
    }

    function getTwoMaxs(arrays: number[][]): number[][] {
        const result: number[][] = new Array<number[]>(2).fill([Number.MIN_SAFE_INTEGER, -1]);
        let index = 0;
        
        for (const a of arrays) {
            if (a[0] >= result[0][0] && a[0] > result[1][0]) {
                result[1][0] = result[0][0];
                result[1][1] = result[0][1];

                result[0][0] = a[0];
                result[0][1] = index;
            }
            else if (a[0] < result[0][0] && a[0] >= result[1][0]) {      
                result[1][0] = a[0];
                result[1][1] = index;
            }

            index++
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


