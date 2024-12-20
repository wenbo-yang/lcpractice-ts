xdescribe('leetcode 1016: binary string with substrings representing 1 to n', () => {
    function queryString(s: string, n: number): boolean {
        if (n > 1023) {
            return false;
        }
        for (let currentNum = n; currentNum > n / 2; --currentNum) {
            const binaryRepresentation = currentNum.toString(2);
            if (s.indexOf(binaryRepresentation) === -1) {
                return false;
            }
        }
        return true;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
