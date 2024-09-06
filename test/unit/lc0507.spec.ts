xdescribe('leetcode 507: perfect number', () => {
    function checkPerfectNumber(num: number): boolean {
        let upper = Math.floor(Math.sqrt(num));
        const sum: number[] = [1];
        let factor = 2;
        while (factor < upper) {
            if (num % factor === 0) {
                upper = num / factor;
                sum.push(factor);
                sum.push(upper);
            } else {
                factor++;
            }
        }

        return sum.reduce((a, b) => a + b) === num;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
