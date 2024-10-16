xdescribe('leetcode 774: max distance to gas station', () => {
    function minmaxGasDist(stations: number[], k: number): number {
        let left = 0, right = 1e8;
        while (right - left > 1e-6) {
            let mid = (left + right) / 2.0;
            if (check(mid, stations, k)) {
                right = mid;
            } else {
                left = mid;
            }
        }
        return left;
    }

    function check(x: number, stations: number[], k: number) {
        let s = 0;
        for (let i = 0; i < stations.length - 1; ++i) {
            s += Math.floor((stations[i + 1] - stations[i]) / x);
        }
        return s <= k;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
