xdescribe('leetcode 233: number of digit 1', () => {
    function countDigitOne(n: number): number {
        let res: number = 0; 
        let a: number = 1; 
        let b: number = 1;
        while (n > 0) {
            res += (n + 8) / 10 * a + (n % 10 === 1 ? 1 : 0) * b;
            b += n % 10 * a;
            a *= 10;
            n /= 10;
        }
        return res;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
