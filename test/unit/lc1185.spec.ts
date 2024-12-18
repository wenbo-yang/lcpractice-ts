xdescribe('leetcode 1185: day of the week', () => {
    function dayOfTheWeek(day: number, month: number, year: number): string {
        const weekDays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        if (month < 3) {
            month += 12;
            year -= 1;
        }
      
        const century: number = Math.floor(year / 100);
        year = year % 100;
      
        let weekDay: number = (century / 4 - 2 * century + year + Math.floor(year / 4) + 13 * (month + 1) / 5 + day - 1) % 7;
      
        weekDay = (weekDay + 7) % 7; 
        return weekDays[weekDay];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
