xdescribe('leetcode 149: description', () => {
    function maxPoints(points: number[][]): number {
        const map: Map<string, Set<string>> = new Map();

        for (let i = 0; i < points.length - 1; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const key = solveForAB(points[i], points[j]);
                if (!map.has(key)) {
                    map.set(key, new Set<string>());
                }

                const set = map.get(key) || new Set();
                set.add(points[i].join(','));
                set.add(points[j].join(','));
            }
        }

        return Math.max(...Array.from(map.values()).map((set) => set.size));
    }

    function solveForAB(point1: number[], point2: number[]): string {
        let x1 = point1[0];
        let y1 = point1[1];
        let x2 = point2[0];
        let y2 = point2[1];
        const a = (y1 - y2) / (x1 - x2);
        const b = y1 - a * x1;

        return [a, b].join(',');
    }

    it('test case 1 points = [[1,1],[2,2],[3,3]], output 3', () => {
        const points = [
            [1, 1],
            [2, 2],
            [3, 3],
        ];
        const result = maxPoints(points);

        expect(result).toEqual(3);
    });

    it('test case 2 points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]], output 4', () => {
        const points = [
            [1, 1],
            [3, 2],
            [5, 3],
            [4, 1],
            [2, 3],
            [1, 4],
        ];
        const result = maxPoints(points);

        expect(result).toEqual(4);
    });
});
