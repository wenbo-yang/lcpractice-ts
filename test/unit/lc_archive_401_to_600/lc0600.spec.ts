xdescribe('leetcode 600: non negative integers without consecutive ones', () => {
    function findIntegers(n: number): number {
        let res = 0; 
        let k = 31; 
        let pre = 0;
        const f = new Array<number>(32).fill(0);
        f[0] = 1; f[1] = 2;
        for (let i = 2; i < 31; ++i) {
            f[i] = f[i - 2] + f[i - 1];
        }

        while (k >= 0) {
            if (n & (1 << k)) {
                res += f[k];
                if (pre) return res;
                pre = 1;
            } else pre = 0;
            --k;
        }
        return res + 1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
