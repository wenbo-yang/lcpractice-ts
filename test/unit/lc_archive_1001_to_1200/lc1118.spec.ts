xdescribe('leetcode 1118: number of days in a month', () => {
    function numberOfDays(year: number, month: number): number {
        if (month === 2) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
        }

        const values = new Map<number, number>([[1, 31], [3,31], [4,30], [5,31], [6,30], [7,31], [8,31], [9,30], [10,31], [11,30], [12,31]]);

        return values.get(month) || 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
