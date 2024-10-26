xdescribe('leetcode 858: mirror reflection', () => {
    function mirrorReflection(p: number, q: number): number {
        const gcdValue: number = gcd(p, q);
        p %= 2;
        q %= 2;

        if (p === 1 && q === 1) {
            return 1;
        }
        return p === 1 ? 0 : 2;
    };
    function gcd(a: number, b: number): number {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
