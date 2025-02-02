xdescribe('leetcode 1288: remove covered intervals', () => {
    function removeCoveredIntervals(intervals: number[][]): number {
        intervals.sort((a,b) => {
            if (a[0] > b[0]) {
                return -1;
            }

            if (a[0] < b[0]) {
                return 1;
            }

            return b[1] - a[1];
        });

        
        const uniqueStart: number[][] = [];
        let r = 1;
        uniqueStart.push(intervals[0]);
        while (r < intervals.length) {
            if (intervals[r][0] !== uniqueStart[uniqueStart.length - 1][0]) {
                uniqueStart.push(intervals[r]);
            }

            r++;
        }

        uniqueStart.sort((a,b) => {
            if (b[1] > a[1]) {
                return -1;
            }

            if (b[1] < a[1]) {
                return 1;
            }

            return a[1] - b[1];
        });

        let l = 0;
        r = 1;
        let toBeRemoved = 0;
        while (r < uniqueStart.length) {
            if (uniqueStart[l][0] < uniqueStart[r][0]) {
                toBeRemoved++
            }
            else {
                l = r;
            }

            r++
        }

        return uniqueStart.length - toBeRemoved;

    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
