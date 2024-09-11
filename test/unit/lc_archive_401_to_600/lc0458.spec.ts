xdescribe('leetcode 458: poor pigs', () => {
    function poorPigs(buckets: number, minutesToDie: number, minutesToTest: number): number {
        const iteratoins = Math.floor(minutesToTest / minutesToDie);
        // have 6 buckets and 2 iterations
        // 123 234 345 6
        //       1    2    3    4     5    6    7    8    9   10  11   12  13  14 15 16 17 18 19 20 21
        // it1  1:0  1:1  2:0  2:1   3:0  3:1  4:0  4:1
        // it2  1:0  1:0  1:1  2:0   2:0  2:0  2:1  3:0  3:0  3:0  3:1
        // it3  1:0  1:0  1:0  1:1   2:0  2:0  2:0  2:0  2:0  2:1  3:0 .....
        // it4  1:0  1:0  1:0  1:0   1:1  2:0  2:0  2:0  2:0  2:0  2:0 2:0 2:1 3:0

        let pigs = 1;
        let last = iteratoins + 1;
        let count = 1;
        while (count * iteratoins + 1 < buckets) {
            count += 2;
            pigs++;
        }

        return pigs;
    }

    function initializeDF(df: number[][]) {
        let pigs = 1;
        for (let j = 0; j < df[0].length; j = j + 2) {
            df[0][j] = pigs;
            df[0][j + 1] = pigs;
        }
    }

    function findMin(l: number, r: number, nums: number[]): number {
        let min = Number.MIN_SAFE_INTEGER;

        while (l < r) {
            min = Math.min(min, nums[l++] + nums[r--]);
        }

        return min;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
