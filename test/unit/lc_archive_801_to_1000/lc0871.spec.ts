import { MaxHeap } from "../commonLibs";

xdescribe('leetcode 871: min refueling stops', () => {
    function minRefuelStops(target: number, startFuel: number, stations: number[][]): number {
        const mem = new Map<string, number>();
        const minStops = dfs(0, startFuel, 0, stations, target, mem);
        return minStops === Number.MAX_SAFE_INTEGER ? -1 : minStops;
    };

    function minRefuelStopsMaxHeap(target: number, startFuel: number, stations: number[][]): number {
        const fuelMaxHeap = new MaxHeap<number>();
  
        stations.push([target, 0]);
        let minStops = 0, prevStationDist = 0;
      
        for (let station of stations) {
            let distance = station[0] - prevStationDist;
          
            startFuel -= distance;
          
            while (startFuel < 0 && fuelMaxHeap.length) {
                startFuel += fuelMaxHeap.pop();  
                minStops += 1;
            }
          
            if (startFuel < 0) {
                return -1;
            }
          
            fuelMaxHeap.push(station[1]);
            prevStationDist = station[0];
        }
      
        return minStops;
    };

    function dfs(currentPosition: number, currentFuel: number, stationIndex: number, stations: number[][], target: number, mem: Map<string, number>): number {
        if (mem.has(toKey(currentPosition,currentFuel))) {
            return mem.get(toKey(currentPosition, currentFuel)) || Number.MAX_SAFE_INTEGER;
        }
        
        if (currentPosition + currentFuel >= target) {
            mem.set(toKey(currentPosition, currentFuel), 0);
            return 0;
        }
        
        let min = Number.MAX_SAFE_INTEGER;

        for (let i = stationIndex; i < stations.length; i++) {
            if (canReach(i, stations, currentPosition, currentFuel)) {
                const diff = stations[i][0] - currentPosition;
                const newFuel =  currentFuel - diff + stations[i][1];
                const newPosition = stations[i][0];
                min = Math.min(min, 1 + dfs(newPosition, newFuel, i + 1, stations, target, mem))
            }
        }

        mem.set(toKey(currentPosition, currentFuel), min);

        return min;
    }

    function canReach(i: number, stations: number[][], currentPosition: number, currentFuel: number) {
        return currentPosition + currentFuel >= stations[i][0];
    }

    function toKey(currentPosition: number, currentFuel: number): string {
        return [currentPosition, currentFuel].join();
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});






