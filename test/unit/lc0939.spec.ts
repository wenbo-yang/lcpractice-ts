xdescribe('leetcode 939: min area rectangle', () => {
    function minAreaRect(points: number[][]): number {
        points.sort((a,b) => {
            if (a[0] < b[0]) {
                return -1;
            }
            if (a[0] > b[0]) {
                return 1;
            }

            return a[1] - b[1];
        });

        const map = new Map<number, number[]>();
        const set = new Set<string>();

        for (const point of points) {
            map.set(point[0], (map.get(point[0]) || []).concat(point[1]));
            set.add(point.join());
        }

        const coors = Array.from(map.entries());

        let min = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < coors.length - 1; i++) {
            let x1 = coors[i][0];
            let y1s = coors[i][1];

            for (let j = i + 1; j < coors.length; j++) {
                let x2 = coors[j][0];
                let y2s = coors[j][1];
                for (const y1 of y1s) {
                    for (const y2 of y2s) {
                        if (y1 !== y2 && set.has([x1, y2].join()) && set.has([x2, y1].join())) {
                            min = Math.min(min, Math.abs(x1 - x2) * Math.abs(y1 - y2));
                        }
                    }
                }
            }
        }

        return min;

    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
