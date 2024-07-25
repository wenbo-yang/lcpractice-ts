xdescribe('leetcode 246: strobogrammatic number', () => {
    function isStrobogrammaticNumber(s: string): boolean {
        const digitMapping = new Map<string, string>([
            ['8', '8'],
            ['6', '9'],
            ['9', '6'],
            ['2', '5'],
            ['5', '2'],
            ['0', '0'],
        ]);

        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (digitMapping.get(s[l++]) !== s[r--]) {
                return false;
            }
        }

        return s.length % 2 === 1 ? digitMapping.has(s[l]) : true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
