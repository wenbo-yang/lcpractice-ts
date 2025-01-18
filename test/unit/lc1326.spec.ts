xdescribe('leetcode 1326: minimum number of taps to open to water a garden', () => {
    function minTaps(n: number, ranges: number[]): number {
        const furthestRight = new Array(n + 1).fill(0);

        for (let i = 0; i < n + 1; ++i) {
            const leftBoundary = Math.max(0, i - ranges[i]);
            const rightBoundary = i + ranges[i];
            furthestRight[leftBoundary] = Math.max(furthestRight[leftBoundary], rightBoundary);
        }

        let tapsNeeded = 0;
        let currentMax = 0;
        let previousMax = 0;

        for (let i = 0; i < n; ++i) {
            currentMax = Math.max(currentMax, furthestRight[i]);
            if (currentMax <= i) {
                return -1;
            }
            if (previousMax == i) {
                tapsNeeded++;
                previousMax = currentMax;
            }
        }

        return tapsNeeded;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
