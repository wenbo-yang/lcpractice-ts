xdescribe('leetcode 461: hamming distance', () => {
    function hammingDistance(x: number, y: number): number {
        const xor = x ^ y;
        let d = 0;
        for(let i = 0; i < 31; i++) {
            if ((xor >> 1 && 1) > 0) {
                d++;
            }
        }

        return d;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
