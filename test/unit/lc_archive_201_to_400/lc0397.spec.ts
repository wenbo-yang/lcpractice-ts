xdescribe('leetcode 397: Integer Replacement', () => {
    function integerReplacement(n: number): number {
        if (n == 1) {
            return 0;
        }

        if (n % 2 === 0) {
            return 1 + integerReplacement(n / 2);
        }

        return 1 + Math.min(integerReplacement(n + 1), integerReplacement(n - 1));
    }

    function integerReplacementBetter(n: number): number {
        if (n == 1) {
            return 0;
        }

        if (n % 2 === 0) {
            return 1 + integerReplacement(n / 2);
        }

        return 2 + Math.min(integerReplacement(Math.floor(n / 2)), integerReplacement(Math.floor(n / 2) - 1));
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
