xdescribe('leetcode 633: description', () => {
    function judgeSquareSum(c: number): boolean {
        const m = Math.sqrt(c);

        for (let a = 0; a <= m; a++) {
            const b = Math.floor(Math.sqrt(c - a * a));
            if (b*b + a * a === c) {
                return true;
            }
        }

        return false;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
