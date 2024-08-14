xdescribe('leetcode 390: ', () => {
    function lastRemaining(n: number): number {
        return n == 1 ? 1 : 2 * (1 + n / 2 - lastRemaining(n / 2));
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
