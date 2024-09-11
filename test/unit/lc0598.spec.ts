xdescribe('leetcode 598: range addition', () => {
    function maxCount(m: number, n: number, ops: number[][]): number {
        for (const op of ops) {
            m = Math.min(m, op[0]);
            n = Math.min(n, op[1]);
        }
        return m * n;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
