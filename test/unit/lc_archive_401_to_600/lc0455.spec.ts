xdescribe('leetcode 455: description', () => {
    function findContentChildren(g: number[], s: number[]): number {
        g.sort((a, b) => a - b);
        s.sort((a, b) => a - b);

        let l = 0;
        let r = 0;
        let count = 0;

        while (l < s.length && r < g.length) {
            if (s[l] >= g[r]) {
                r++;
                count++;
            }

            l++;
        }

        return count;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
