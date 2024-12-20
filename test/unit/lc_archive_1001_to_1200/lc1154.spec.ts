xdescribe('leetcode 1154: day of the year', () => {
    function dayOfYear(date: string): number {
        const [year, month, day] = date.split('-').map(ymd => Number(ymd));
        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        const monthDay = [0, 31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let index = 0;
        const prefixSum = monthDay.map(n => monthDay[index++ - 1] + n);
        
        return prefixSum[month - 1] + day;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
