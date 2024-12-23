xdescribe('leetcode 1218: longest arithmetic subsequence of given difference', () => {
    function longestSubsequence(arr: number[], difference: number): number {
        const f: Map<number, number> = new Map();
        for (const x of arr) {
            f.set(x, (f.get(x - difference) ?? 0) + 1);
        }
        return Math.max(...f.values());
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
