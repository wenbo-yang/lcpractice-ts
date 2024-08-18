xdescribe('leetcode 469: description', () => {
    function isConvex(points: number[][]): boolean {
        const n = points.length
        let pre = 0, cur = 0;
        for (let i = 0; i < n; i++) {
            const p1 = points[i];
            const p2 = points[(i + 1) % n];
            const p3 = points[(i + 2) % n];
            const x1 = p2[0] - p1[0];
            const y1 = p2[1] - p1[1];
            const x2 = p3[0] - p1[0];
            const y2 = p3[1] - p1[1];
            cur = x1 * y2 - x2 * y1;
            if (cur != 0) {
                if (cur * pre < 0) {
                    return false;
                }
                pre = cur;
            }
        }
        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
