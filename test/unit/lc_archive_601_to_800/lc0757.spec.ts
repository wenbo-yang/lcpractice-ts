xdescribe('leetcode 757: Set Intersection Size At Least Two', () => {
    function intersectionSizeTwo(intervals: number[][]): number {
        intervals.sort((a, b) => a[1] == b[1] ? b[0] - a[0] : a[1] - b[1]);
        let ans = 0;
        let s = -1, e = -1;
        for (const v of intervals) {
            let a = v[0], b = v[1];
            if (a <= s) {
                continue;
            }
            if (a > e) {
                ans += 2;
                s = b - 1;
                e = b;
            } else {
                ans += 1;
                s = e;
                e = b;
            }
        }
        return ans;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
