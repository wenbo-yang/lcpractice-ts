xdescribe('leetcode 1015: best sightseeing pair', () => {
    function smallestRepunitDivByK(k: number): number {
        let remainder = 1 % k;
        for (let length = 1; length <= k; ++length) {
            if (remainder === 0) {
                return length;
            }
            remainder = (remainder * 10 + 1) % k;
        }
        return -1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
