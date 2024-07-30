xdescribe('leetcode 274: hIndex', () => {
    function hIndex(citations: number[]): number {
        citations.sort((a, b) => a - b);

        for (let i = 1; i <= citations.length; i++) {
            if (citations[0] + i - 1 <= i - 1) {
                return i - 1;
            }
        }

        return citations.length;
    }

    it('test case 1 Input:, citations = [3,0,6,1,5], output 3 ', () => {
        expect(hIndex([3, 0, 6, 1, 5])).toEqual(3);
    });
});
