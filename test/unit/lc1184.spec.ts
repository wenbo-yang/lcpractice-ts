xdescribe('leetcode 1184: distance between bus stops', () => {
    function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
        const s = distance.reduce((a, b) => a + b, 0);
        let a = 0;
        const n = distance.length;
        while (start != destination) {
            a += distance[start];
            start = (start + 1) % n;
        }
        return Math.min(a, s - a);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
