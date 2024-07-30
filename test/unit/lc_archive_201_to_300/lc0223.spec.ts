xdescribe('leetcode 223: description', () => {
    function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
        let area1 = (ax2 - ax1) * (ay2 - ay1);
        let area2 = (bx2 - bx1) * (by2 - by1);
        let x1 = Math.max(ax1, bx1);
        let x2 = Math.max(ax2, Math.min(ax2, bx2));
        let y1 = Math.max(ay1, by1);
        let y2 = Math.max(y1, Math.min(ay2, by2));
        return area1 + area2 - (x2 - x1) * (y2 - y1);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
