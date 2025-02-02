xdescribe('leetcode 1272: remove interval', () => {
    function removeInterval(intervals: number[][], toBeRemoved: number[]): number[][] {
        const removeStart = toBeRemoved[0];
        const removeEnd = toBeRemoved[1];
    
        const updatedIntervals: number[][] = [];
    
        for (const interval of intervals) {
            const start = interval[0];
            const end = interval[1];
        
            if (start >= removeEnd || end <= removeStart) {
                updatedIntervals.push(interval);
            } else {
                if (start < removeStart) {
                    updatedIntervals.push([start, removeStart]);
                }
                if (end > removeEnd) {
                    updatedIntervals.push([removeEnd, end]);
                }
            }
        }
    
        return updatedIntervals;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
