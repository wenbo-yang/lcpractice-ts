xdescribe('leetcode 342: power of 4', () => {
    function isPowerOfFour(n: number): boolean {
        while (n % 4 === 0) {
            n = n / 4;
        }
        return n === 1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
