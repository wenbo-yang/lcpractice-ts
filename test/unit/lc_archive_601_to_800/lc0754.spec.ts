xdescribe('leetcode 754: reach a number', () => {
    function reachNumber(target: number): number {
        target = Math.abs(target);
        let [s, k] = [0, 0];
        while (1) {
            if (s >= target && (s - target) % 2 == 0) {
                return k;
            }
            ++k;
            s += k;
        }
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
