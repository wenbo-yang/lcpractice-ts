import { MinHeap } from './commonLibs';


xdescribe('leetcode 1353: description', () => {
    function maxEvents(events: number[][]): number {
        const eventsByStartDay: { [key: number]: number[] } = {};

        // Initialize minimum and maximum days for all events
        let minDay: number = Number.MAX_SAFE_INTEGER;
        let maxDay: number = 0;

        // Populate the eventsByStartDay and define minimum and maximum days across all events
        events.forEach(event => {
            const [startDay, endDay] = event;
            eventsByStartDay[startDay] = eventsByStartDay[startDay] || [];
            eventsByStartDay[startDay].push(endDay);

            minDay = Math.min(minDay, startDay);
            maxDay = Math.max(maxDay, endDay);
        });

        
        const minHeap: MinHeap<number> = new MinHeap<number>();

        let maxEventsAttended: number = 0;

        for (let day = minDay; day <= maxDay; day++) {
            while (minHeap.length && minHeap.peek() < day) {
                minHeap.pop();
            }
            if (eventsByStartDay[day]) {
                eventsByStartDay[day].forEach(endDay => minHeap.push(endDay));
            }
            
            if (minHeap.length) {
                maxEventsAttended++;
                minHeap.pop();
            }
        }

        // Return the total number of events that can be attended
        return maxEventsAttended;
            };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
