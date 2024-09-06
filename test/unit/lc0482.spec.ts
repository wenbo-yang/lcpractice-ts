xdescribe('leetcode 482: license key formatting', () => {
    function licenseKeyFormatting(s: string, k: number): string {
        const segs: string[][] = [[]];

        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] === '-') {
                continue;
            }

            if (segs[segs.length - 1].length === k) {
                segs[segs.length - 1].reverse();
                segs.push([]);
            }

            segs[segs.length - 1].push(s[i].toLocaleUpperCase());
        }

        return segs
            .reverse()
            .map((it) => it.join(''))
            .join('-');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
