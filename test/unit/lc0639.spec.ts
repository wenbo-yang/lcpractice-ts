xdescribe('leetcode 639: decode ways', () => {
    function numDecodings(s: string): number {
        if (s.length === 0) {
            return 0;
        }

        const mod = 1000000007;
        const df = new Array<number>(s.length + 1);
        df[0] = 1;
        df[1] = getWaysOfChar(s[0]);

        for (let i = 1; i < s.length; i++) {
            df[i+1] = (getWaysOfChar(s[i]) * df[i] + getWaysOfTwoChars(s[i - 1], s[i]) * df[i - 1]) % mod;
        }

        return df[df.length - 1];
    };

    function getWaysOfChar(c: string): number {
        if (c === '0') return 0;
        if (c === '*') return 9;

        return 1;
    }

    function getWaysOfTwoChars(char1: string, char2: string): number {        
        if (char1 === '*' && char2 === '*') {
            return 15;
        }

        if (char1 === '*') {
            return (char2 >= '0' && char2 <= '6') ? 2 : 1;
        } 

        if (char2 === '*') {
            if (char1 === '1') {
                return 9;
            }

            if (char1 === '2') {
                return 6;
            }

            return 0;
        }

        return char1+char2 >= '10' && char1+char2 <='26' ? 1 : 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


