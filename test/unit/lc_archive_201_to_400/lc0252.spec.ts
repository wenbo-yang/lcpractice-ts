xdescribe('leetcode 252: description', () => {
    function canAttendAllMeetings(timeSlots: number[][]): boolean {
        timeSlots.sort((a, b) => a[0] - b[0]);

        for (let i = 1; i < timeSlots.length; i++) {
            if (timeSlots[i][0] < timeSlots[i - 1][1]) {
                return false;
            }
        }

        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
