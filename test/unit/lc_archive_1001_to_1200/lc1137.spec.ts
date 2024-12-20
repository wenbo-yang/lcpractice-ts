xdescribe('leetcode 1137: n-th fib number', () => {
    function tribonacci(n: number): number {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }

        if (n === 2) {
            return 1;
        }

        let curr = 1;
        let prev = 1;
        let k = 3;
        while (k <= n) {
            let next = curr + prev;
            prev = curr;
            curr = next;
            k++;
        }

        return curr;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
