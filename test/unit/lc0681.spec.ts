xdescribe('leetcode 681: next closest time', () => {
    function nextClosestTime(time: string): string {
        let i = 0;
        const minutes = new Array<string>(60).fill(i.toString());
        for(let i = 0; i < 10; i++) {
            minutes[i] = '0' + minutes[i];
        }

        i = 0;
        const hours = new Array<string>(24).fill(i.toString());
        for(let i = 0; i < 10; i++) {
            hours[i] = '0' + hours[i];
        }

        const allowedDigits = time.split(':')[0].split('').concat(time.split(':')[1].split(''));

        // find minute
        const hour = time.split(':')[0];
        const minute = time.split(':')[1];

        const nextHour = findNextHour(hour, hours, allowedDigits);
        const nextMinute = findNextMinute(minute, minutes, allowedDigits);

        return nextHour + ':' + nextMinute;
    }

    function findNextHour(hour: string, hours: string[], allowedDigits: string[]): string {
        let index = hours.findIndex(h => h === hour);
        while(hours[(++index) % hours.length] !== hour) {
            const targetHour = hours[index % hours.length].split('');
            if(allowedDigits.includes(targetHour[0]) && 
            allowedDigits.includes(targetHour[1])) {
                return hours[index % hours.length];
            }
        }

        return '-1';
    }

    function findNextMinute(minute: string, minutes: string[], allowedDigits: string[]) {
        let index = minutes.findIndex(m => m === minute);
        while(minutes[(++index) % minutes.length] !== minute) {
            const targetMinute = minute[index % minute.length].split('');
            if(allowedDigits.includes(targetMinute[0]) && 
            allowedDigits.includes(targetMinute[1])) {
                return minutes[index % minutes.length];
            }
        }

        return '-1';
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


