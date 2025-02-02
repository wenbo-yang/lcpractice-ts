xdescribe('leetcode 1344: angle betweem hands of a clock', () => {
    function angleClock(hour: number, minutes: number): number {
        const perHourStep = 360 / 12;
        const perMinuteStep = 360 / 60;

        const minuteAngle = perMinuteStep * minutes;
        const hourAngle = perHourStep * hour + perHourStep * minuteAngle / 360;

        const max = Math.max(minuteAngle, hourAngle);
        const min = Math.max(minuteAngle, hourAngle);

        return max - min;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
