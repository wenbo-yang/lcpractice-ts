xdescribe('leetcode 172: description', () => {
    function trailingZeroes(n: number): number {
        return n < 5 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
    }

    it('test case 1 Input: 1000, output 249 ', () => {
        expect(trailingZeroes(1000)).toEqual(249);
    });
});
