xdescribe('leetcode 402: remove k digits', () => {
    function removeKdigits(num: string, k: number): string {
        const res: string[] = [];
        let n = num.length;
        let keep = n - k;
        for (const c of num) {
            while (k && res.length && res[res.length - 1] > c) {
                res.pop();
                k--;
            }
            if (res.length || c != '0') {
                res.push(c);
            }
        }

        while (res.length && k--) {
            res.pop();
        }

        return res.length === 0 ? '0' : res.join('');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
