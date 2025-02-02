xdescribe('leetcode 1386: cinema seat allocation', () => {
    function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
        const reservedMap: Map<number, number> = new Map();

        for (const [row, seat] of reservedSeats) {
            reservedMap.set(row, (reservedMap.get(row) ?? 0) | (1 << (10 - seat)));
        }
    
        let maxFamilies = (n - reservedMap.size) * 2;
        const familySeatMasks = [0b0111100000, 0b0000011110, 0b0001111000];
    
        for (let [_, reservedSeatsBitmask] of reservedMap) {
            for (const mask of familySeatMasks) {
                if ((reservedSeatsBitmask & mask) === 0) {
                    reservedSeatsBitmask |= mask;
                    maxFamilies++;
                }
            }
        }
    
        return maxFamilies;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
