xdescribe('leetcode 1134: armstrong number', () => {
    function isArmstrong(n: number): boolean {
        const digits = n.toString().split('').map(s => Number(s));
        const k = digits.length;

        return digits.map(d => Math.pow(d, k)).reduce((a,b) => a + b) === n;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
