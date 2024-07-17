xdescribe('leetcode 191: number of 1 bits', () => {
    function hammingWeight(n: number): number {
        let count = 0;
        let shifts = 0;
        while (shifts++ < 32) {
            if ((1 & n) === 1) {
                count++;
            }

            n = n >> 1;
        }

        return count;
    }

    it('test case 1 Input: 3, output 2 ', () => {
        expect(hammingWeight(3)).toEqual(2);
    });
});
