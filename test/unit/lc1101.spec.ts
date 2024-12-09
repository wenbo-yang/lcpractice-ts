xdescribe('leetcode 1101: earliest timestamp to find all friends', () => {
    function earliestAcq(logs: number[][], n: number): number {
        const p: number[] = Array(n)
            .fill(0)
            .map((_, i) => i);

        logs.sort((a, b) => a[0] - b[0]);
        for (const [t, x, y] of logs) {
            const rx = find(x, p);
            const ry = find(y, p);
            if (rx !== ry) {
                p[rx] = ry;
                if (--n === 1) {
                    return t;
                }
            }
        }
        return -1;
    }

    function find (x: number, p: number[]): number {
        if (p[x] !== x) {
            p[x] = find(p[x], p);
        }
        return p[x];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
