xdescribe('leetcode 435: description', () => {
    function eraseOverlapIntervals(intervals: number[][]): number {
        intervals.sort((a,b) => a[0] - b[0]);

        let intervalsToRemove = 0;
        let currl = 0;
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < intervals[currl][1]) {
                intervalsToRemove++;
            }
            else {
                currl++;
            }
        }

        return intervalsToRemove;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});