xdescribe('leetcode 1274: number of ships in a rectangle', () => {

    class Sea {
         hasShips(topRight: number[], bottomLeft: number[]): boolean {
            throw new Error("not Implemented");
         }
    }

    function countShips(sea: Sea, topRight: number[], bottomLeft: number[]): number {
        const [x1, y1] = bottomLeft;
        const [x2, y2] = topRight;
        if (x1 > x2 || y1 > y2 || !sea.hasShips(topRight, bottomLeft)) {
            return 0;
        }
        if (x1 === x2 && y1 === y2) {
            return 1;
        }
        const midx = (x1 + x2) >> 1;
        const midy = (y1 + y2) >> 1;
        const a = countShips(sea, topRight, [midx + 1, midy + 1]);
        const b = countShips(sea, [midx, y2], [x1, midy + 1]);
        const c = countShips(sea, [midx, midy], bottomLeft);
        const d = countShips(sea, [x2, midy], [midx + 1, y1]);
        return a + b + c + d;
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
