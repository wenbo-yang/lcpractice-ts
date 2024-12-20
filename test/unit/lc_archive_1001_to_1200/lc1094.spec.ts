xdescribe('leetcode 1094: car pooling', () => {
    function carPooling(trips: number[][], capacity: number): boolean {
        const deltaPassengers = new Array(1001).fill(0);

        for (const [numPassengers, start, end] of trips) {
            deltaPassengers[start] += numPassengers;
            deltaPassengers[end] -= numPassengers;
        }

        let currentPassengers = 0;

        for (const passengerChange of deltaPassengers) {
            currentPassengers += passengerChange;

            if (currentPassengers > capacity) {
                return false;
            }
        }

        return true;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
