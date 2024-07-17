xdescribe('leetcode 190: rotate bits', () => {
    function reverseBits(n: number): number {
        let retVal = 0;
        let count = 0;
        while (count++ < 32) {
            const currentBit: number = 1 & n;

            retVal = retVal << 1;
            retVal = retVal + currentBit;
            n = n >> 1;
        }

        return retVal;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {
        expect(reverseBits(0b00000010100101000001111010011100)).toEqual(0b00111001011110000010100101000000);
    });
});
