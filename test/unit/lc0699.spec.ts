xdescribe('leetcode 699: falling squares', () => {
    class Interval {
        start: number = 0;
        end: number = 0;
        height: number = 0;
        constructor(start: number, end: number, height: number) {
            this.start = start;
            this.end = end;
            this.height = height;
        }
    };
    
    function fallingSquares(positions: number[][]): number[] {
        const ans: number[] = [];
        const intervals: Interval[] = [];
        let maxHeight = Number.MIN_SAFE_INTEGER;
        for (const kv of positions) {
            let start = kv[0];
            let end = start + kv[1];            
            let baseHeight = 0;
            for (const interval of intervals) {
                if (interval.start >= end || interval.end <= start)             
                    continue;
                baseHeight = Math.max(baseHeight, interval.height);
            }
            let height = kv[0] + baseHeight;
            intervals.push(new Interval(start, end, height));
            maxHeight = Math.max(maxHeight, height);
            ans.push(maxHeight);
        }
        return ans;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
