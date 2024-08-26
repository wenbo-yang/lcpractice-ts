xdescribe('leetcode 497: description', () => {
    class Solution {
        rects: number[][];

        constructor(rects: number[][]) {
            this.rects = rects;    
        }
    
        pick(): number[] {
            let sumArea = 0;
            let selected: number[] = [];
            for (const rect of this.rects) {
                let area = (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1);
                sumArea += area;
                if (Math.round(Math.random() * sumArea) < area) {
                    selected = rect;
                }
            }
            let x = Math.round(Math.random() * (selected[2] - selected[0] + 1) + selected[0]);
            let y = Math.round(Math.random() * (selected[3] - selected[1] + 1) + selected[1]);
            return [x, y];
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
