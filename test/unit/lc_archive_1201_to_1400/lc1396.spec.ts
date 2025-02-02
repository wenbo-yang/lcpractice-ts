xdescribe('leetcode 1396: design under ground system', () => {
    interface CheckInData {
        stationName: string;
        time: number;
    }
    
    interface JourneyData {
        totalTime: number;
        tripCount: number;
    }

    class UndergroundSystem {
        private checkInDataMap = new Map<number, CheckInData>();
        private journeyDataMap = new Map<string, JourneyData>();
        constructor() {
            
        }
    
        checkIn(id: number, stationName: string, time: number): void {
            this.checkInDataMap.set(id, {stationName, time});
        }
    
        checkOut(id: number, stationName: string, time: number): void {
            const checkInData = this.checkInDataMap.get(id);
            if (checkInData) {
                const routeKey: string = `${checkInData.stationName}-${stationName}`;
                let journeyData = this.journeyDataMap.get(routeKey) || { totalTime: 0, tripCount: 0 };
            
                journeyData = {
                totalTime: journeyData.totalTime + (time - checkInData.time),
                tripCount: journeyData.tripCount + 1
                };
            
                this.journeyDataMap.set(routeKey, journeyData);
            }
        }
    
        getAverageTime(startStation: string, endStation: string): number {
            const routeKey: string = `${startStation}-${endStation}`;
            const journeyData = this.journeyDataMap.get(routeKey);
            if (!journeyData) throw new Error('No journey data found for this route.');

            return journeyData.totalTime / journeyData.tripCount;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
