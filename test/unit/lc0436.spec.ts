xdescribe('leetcode 436: find right interval', () => {
    function findRightInterval(intervals: number[][]): number[] {
        for(let i = 0; i < intervals.length; i++) {
            intervals[i].push(i);
        }

        intervals.sort((a,b) => a[0] - b[0]);

        for(let i = 0; i < intervals.length; i++) {
            const index = findStartThatIsGreaterEqualsToEnd(intervals, i, i, intervals.length - 1)
            intervals[i].push(i);
            intervals[i].push(index);
        }

        return intervals.sort((a,b) =>a[2] - b[2]).map(it => it[3]);
    };

    function findStartThatIsGreaterEqualsToEnd(intervals: number[][], index: number, startIndex: number, endIndex: number): number {
        const end = intervals[index][1];

        while (startIndex < endIndex) {
            let pivot = Math.floor((endIndex + startIndex) / 2);
            
            if (intervals[pivot][0] < end) {
                startIndex = pivot + 1;
            } 
            else {
                endIndex = pivot;
            }
        }

        return startIndex >= intervals.length ? -1 : startIndex;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


