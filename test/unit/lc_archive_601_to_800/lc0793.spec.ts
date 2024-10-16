xdescribe('leetcode 793: factorial trailling zeros', () => {
    function preimageSizeFZF(k: number): number {
        return g(k + 1) - g(k);
    };

    function g(k: number): number {
        let left = 0, right = 5 * k;
        while (left < right) {
            let mid = (left + right) >> 1;
            if (f(mid) >= k) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    function f(x: number): number {
        if (x == 0) {
            return 0;
        }
        return (x / 5) + f(x / 5);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
