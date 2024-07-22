xdescribe('leetcode 171: excel col number', () => {
    function titleToNumber(columnTitle: string): number {
        let currentPower = 1;
        let colNumber = 0;
        for (let i = columnTitle.length - 1; i >= 0; i--) {
            colNumber += currentPower * (columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
            currentPower *= 26;
        }

        return colNumber;
    }

    it('test case 1 Input: ZY,  output 701', () => {
        expect(titleToNumber('ZY')).toEqual(701);
    });
});
