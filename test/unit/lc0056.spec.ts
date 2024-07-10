describe('leetcode 56: merge intervals', () =>{
    function merge(intervals: number[][]): number[][] {
        intervals.sort((a, b) => b[0] - a[0]);
        let l = intervals.length - 1;

        while(l >= 0) {
            if( l - 1 >= 0 && intervals[l - 1][0] <= intervals[l][1]) {
                intervals[l - 1][0] = Math.min(intervals[l][0], intervals[l - 1][0]);
                intervals[l - 1][1] = Math.max(intervals[l][1], intervals[l - 1][1]);
                intervals[l] = intervals[intervals.length - 1];

                intervals.pop();
            }
            l--;
        }

        console.log({intervals});
        return intervals;
    };
    
    // it('test case 1 Input: [[1,3],[2,6],[8,10],[15,18]], output [[1,6],[8,10],[15,18]] ', () => {
    //     const intervals = [[1,3],[2,6],[8,10],[15,18]];
    //     const result = merge(intervals);
        
    //     expect(result).toEqual([[15,18],[8,10],[1,6]]);
    // });

    it('test case 2 Input: [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]], output [[4,7],[1,3]] ', () => {
        const intervals = [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]];
        const result = merge(intervals);
        
        expect(result).toEqual([[4,7],[1,3]]);
    });
});


