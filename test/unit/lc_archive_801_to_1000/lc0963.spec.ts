xdescribe('leetcode 963: min area rectangle', () => {
    function minAreaFreeRect(points: number[][]): number {
        const numOfPoints = points.length;
        const pointKey = (x: number, y: number): number => x * 40001 + y;
        const pointSet: Set<number> = new Set();

        points.forEach(([x, y]) => pointSet.add(pointKey(x, y)));

        let minArea = Number.MAX_VALUE; 

        for (let i = 0; i < numOfPoints; ++i) {
            const [x1, y1] = points[i];
            for (let j = 0; j < numOfPoints; ++j) {
                if (j !== i) { 
                    const [x2, y2] = points[j];
                    for (let k = 0; k < numOfPoints; ++k) {
                        if (k !== i && k !== j) { 
                            const [x3, y3] = points[k];
                            const x4 = x2 - x1 + x3;
                            const y4 = y2 - y1 + y3;
                            if (pointSet.has(pointKey(x4, y4))) {
                                if ((x2 - x1) * (x3 - x1) + (y2 - y1) * (y3 - y1) === 0) {
                                    const widthSquared = (x2 - x1) ** 2 + (y2 - y1) ** 2;
                                    const heightSquared = (x3 - x1) ** 2 + (y3 - y1) ** 2;
                                    minArea = Math.min(minArea, Math.sqrt(widthSquared * heightSquared));
                                }
                            }
                        }
                    }
                }
            }
        }
        return minArea === Number.MAX_VALUE ? 0 : minArea;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
