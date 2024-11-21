xdescribe('leetcode 899: orderly queue', () => {
    function orderlyQueue(s: string, k: number): string {
        if (k > 1) {
            return s.split('').sort().join('');
        }
        const stringLength = s.length;
        let minimumString = s;

        for (let i = 1; i < stringLength; i++) {
            const rotatedString = s.slice(i) + s.slice(0, i);
            if (rotatedString < minimumString) {
                minimumString = rotatedString;
            }
        }

        return minimumString;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
