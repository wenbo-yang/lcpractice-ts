xdescribe('leetcode 1317: convert integer to the sum of two no-zero integers', () => {
    function getNoZeroIntegers(n: number): number[] {
        let l = Math.floor(n / 2);
        let r = n - l;
        
        while (l.toString().indexOf('0') !== -1 || r.toString().indexOf('0') !== -1) {
            l--;
            r++;
        }

        return [l, r];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
