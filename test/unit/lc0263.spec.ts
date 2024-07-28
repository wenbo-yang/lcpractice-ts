xdescribe('leetcode 263: description', () => {
    function isUgly(n: number): boolean {
        if (n === 0) {
            return false;
        }

        while (n % 2 === 0) {
            n = n / 2;
        }

        while (n % 3 === 0) {
            n = n / 3;
        }

        while (n % 5 === 0) {
            n = n / 5;
        }

        return n === 1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
