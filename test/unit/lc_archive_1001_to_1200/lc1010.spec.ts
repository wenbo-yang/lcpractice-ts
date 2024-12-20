xdescribe('leetcode 1010: pairs of songs with total durations divisible by 60', () => {
    function numPairsDivisibleBy60(time: number[]): number {
        const countMod60: number[] = new Array(60).fill(0);
        for (const t of time) {
            ++countMod60[t % 60];
        }

        let totalPairs = 0;

        for (let x = 1; x < 30; ++x) {
            totalPairs += countMod60[x] * countMod60[60 - x];
        }

        totalPairs += (countMod60[0] * (countMod60[0] - 1)) / 2;

        totalPairs += (countMod60[30] * (countMod60[30] - 1)) / 2;

        return totalPairs;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
