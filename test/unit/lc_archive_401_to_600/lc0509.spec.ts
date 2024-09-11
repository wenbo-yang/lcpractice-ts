xdescribe('leetcode 509: fib', () => {
    function fib(n: number): number {
        // formular
        // golden ratio
        // (1 + sqrt(5)) / 2 power of n
        if (n === 1) {
            return 1;
        }

        if (n === 2) {
            return 2;
        }
        let curr = 2;
        let prev = 1;
        n = n - 2;
        while (n-- >= 0) {
            let tempCurr = curr;
            curr = curr + prev;
            prev = tempCurr;
        }

        return curr;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
