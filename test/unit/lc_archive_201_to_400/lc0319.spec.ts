xdescribe('leetcode 319: description', () => {
    function bulbSwitch(n: number): number {
        let res: number = 1;
        while (res * res <= n) ++res;
        return res - 1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});