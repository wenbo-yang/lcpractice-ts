xdescribe('leetcode number: name', () => {
    function numDecodings(s: string): number {
        if (!s || s.startsWith('0')) {
            return 0;
        }

        const df = new Array<number>(s.length + 1).fill(0);
        df[0] = 0;
        df[1] = 1;

        for (let i = 1; i < s.length; i++) {
            if (!canDecode2Ways(s.charAt(i - 1), s.charAt(i))) {
                df[i + 1] = df[i - 1];
            } else {
                df[i + 1] = Math.max(df[i - 1] + 2, df[i] + 1);
            }
        }

        return df[s.length];
    }

    it('test case 1 Input: s = "226", output 3 ', () => {
        const result = numDecodings('226');

        expect(result).toEqual(3);
    });
});

function canDecode2Ways(s1: string, s2: string) {
    const number = Number(s1 + s2);
    if (number <= 26 && number !== 20 && number !== 10) {
        return true;
    }

    return false;
}
