xdescribe('leetcode 1198: return smallest common element', () => {
    function smallestCommonElement(mat: number[][]): number {
        const cnt: number[] = new Array(10001).fill(0);
        for (const row of mat) {
            for (const x of row) {
                if (++cnt[x] == mat.length) {
                    return x;
                }
            }
        }
        return -1;
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
