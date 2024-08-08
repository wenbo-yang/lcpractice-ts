xdescribe('leetcode 201: description', () => {
    function rangeBitwiseAnd(left: number, right: number): number {
        while (right > left) {
            right &= right - 1; // clears the lowest set bit.
        }

        return right;
    }

    it('test case 1 Input: left = 1, right = 2147483647, output 0 ', () => {
        expect(rangeBitwiseAnd(1, 2147483647)).toEqual(0);
    });
});
