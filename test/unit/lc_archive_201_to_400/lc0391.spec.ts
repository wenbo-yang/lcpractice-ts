xdescribe('leetcode 391: perfect square', () => {
    function isRectangleCover(rectangles: number[][]): boolean {
        const corners = new Set<string>();
        let area: number = 0;
        for (const rect of rectangles) {            
          const p1 = [rect[0], rect[1]];
          const p2 = [rect[2], rect[1]];
          const p3 = [rect[2], rect[3]];
          const p4 = [rect[0], rect[3]];

          for (const p of [p1, p2, p3, p4]) {        
            corners.add(p.join());
            if (!p[1]) {
                corners.delete(p.join());
            } 
          }
          area += (p3[0] - p1[0]) * (p3[1] - p1[1]);
        }
        if (corners.size != 4) return false;
        const p1 = Array.from(corners).sort()[0].split(',').map(it => Number(it));
        const p3 = Array.from(corners).sort()[corners.size - 1].split(',')..map(it => Number(it));    
        return area == (p3[0] - p1[0]) * (p3[1] - p1[1]);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});