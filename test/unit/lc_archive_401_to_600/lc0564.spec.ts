xdescribe('leetcode 564: find closest palidrome', () => {
    function nearestPalindromic(n: string) {
        const x = Number(n);
        let ans: number = -1;

        for (const t of getCandidates(n)) {
            if (ans === -1 || Math.abs(t - x) < Math.abs(ans - x) || (Math.abs(t - x) === Math.abs(ans - x) && t < ans)) {
                ans = t;
            }
        }

        return ans.toString();
    }

    function getCandidates(n: string): Set<number> {
        const length = n.length;
        const res = new Set<number>();

        res.add(Number(Math.pow(10, length - 1) - 1));
        res.add(Number(Math.pow(10, length) + 1));

        const left = BigInt(n.substring(0, Math.ceil(length / 2)));

        for (let i = left - 1n; i <= left + 1n; i++) {
            const prefix = i.toString();
            const t =
                prefix +
                prefix
                    .split('')
                    .reverse()
                    .slice(length % 2)
                    .join('');
            res.add(Number(t));
        }

        res.delete(Number(n));
        return res;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
