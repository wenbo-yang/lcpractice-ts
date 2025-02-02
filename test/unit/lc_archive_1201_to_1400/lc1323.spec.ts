xdescribe('leetcode 1323: maximum 69 number', () => {
    function maximum69Number (num: number): number {
        const s = num.toString().split('');
        const index = s.findIndex(n => n === '6');

        if (index !== -1) {
            s[index] = '9';
        }

        return Number(s.join(''));
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
