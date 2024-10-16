xdescribe('leetcode 759: employee free time', () => {
    class Interval {
        public start: number = 0;;
        public end: number = 0;
    
        public constructor(start: number, end: number) {
            this.start = start;
            this.end = end;
        }
    };

    function employeeFreeTime(schedule: Interval[][]) {
        const allSchedules: Interval[] = [];
        for (const list of schedule) {
            allSchedules.concat(list);
        }
            
        let compare = (a: Interval, b: Interval): number => {
            if (a.start !== b.start) {
                return a.start - b.start;
            }
            return a.end - b.end;
        }

        allSchedules.sort(compare);

        const sorted: Interval[] = [];
        let interval0 = allSchedules[0];
        let curStart = interval0.start, curEnd = interval0.end;
        let size = allSchedules.length;
        for (let i = 1; i < size; i++) {
            const interval = allSchedules[i];
            if (interval.start <= curEnd)
                curEnd = Math.max(curEnd, interval.end);
            else {
                sorted.push(new Interval(curStart, curEnd));
                curStart = interval.start;
                curEnd = interval.end;
            }
        }
        sorted.push(new Interval(curStart, curEnd));
        const freeTimeList: Interval[] = [];
        let sortedSize = sorted.length;
        for (let i = 1; i < sortedSize; i++) {
            freeTimeList.push(new Interval(sorted[i - 1].end, sorted[i].start));
        }
            
        return freeTimeList;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
