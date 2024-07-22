xdescribe('leetcode 69: square root ', () => {
    function mySqrt(x: number): number {
        let l: number = 1;
        let r: number = x + 1;
        while (l < r) {
            let m = Math.floor(l + (r - l) / 2);
            if (m * m > x) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        return l - 1;
    }

    it('test case 1 Input: x = 4, output 2 ', () => {});
});
