xdescribe('leetcode 326: power of 3', () => {
    function isPowerOfThree(n: number): boolean {
        if (n <= 0) {
            return false;
        }

        while (n % 3 === 0 && n >= 3) {
            n = n / 3;
        }

        return n === 1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
