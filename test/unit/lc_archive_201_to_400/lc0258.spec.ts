xdescribe('leetcode 258: description', () => {
    function addDigits(num: number): number {
        return num
            .toString()
            .split('')
            .map((c) => Number(c))
            .reduce((a, b) => Number(a) + Number(b));
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
