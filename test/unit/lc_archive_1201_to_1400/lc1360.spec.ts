xdescribe('leetcode 1360: description', () => {
    function daysBetweenDates(date1: string, date2: string): number {
        return Math.abs(calcDays(date1) - calcDays(date2));
    };

    function calcDays(date: string): number {
        let totalDays = 0;
        const [year, month, day] = date.split('-').map(Number);
    
        for (let currentYear = 1971; currentYear < year; ++currentYear) {
            totalDays += isLeapYear(currentYear) ? 366 : 365;
        }
        for (let currentMonth = 1; currentMonth < month; ++currentMonth) {
            totalDays += daysOfMonth(year, currentMonth);
        }
        totalDays += day - 1;
    
        return totalDays;
    }

    function daysOfMonth(year: number, month: number): number {
        
        const daysPerMonth = [
            31,                             
            isLeapYear(year) ? 29 : 28,     
            31,                             
            30,                             
            31,                             
            30,                             
            31,                             
            31,                             
            30,                             
            31,                             
            30,                             
            31                              
        ];
        
        return daysPerMonth[month - 1];
    }

    function isLeapYear(year: number) {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
